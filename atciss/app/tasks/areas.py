from loguru import logger
from pydantic import TypeAdapter

from atciss.app.utils.redis import RedisClient

from ..views.areas import EAUPAreas, AreaBooking
from ..utils import AiohttpClient, ClientConnectorError


async def fetch_areas() -> None:
    """Periodically fetch active areas."""
    async with AiohttpClient.get() as aiohttp_client:
        try:
            res = await aiohttp_client.get(
                "https://eaup.vatsim.pt/api/v1/dfs/areas/",
            )
        except ClientConnectorError as e:
            logger.exception(f"Could not connect {e!s}")
            return

        eaup_areas = EAUPAreas.model_validate(await res.json())

    logger.info(f"EAUP Areas: {len(eaup_areas.areas)} areas received")

    async with await RedisClient.get().pipeline() as pipe:
        pipe.set(
            "areas:bookings",
            TypeAdapter(list[AreaBooking]).dump_json(eaup_areas.areas),
        )

        await pipe.execute()
