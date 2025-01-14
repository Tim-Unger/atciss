/** @jsxImportSource theme-ui */

import { useState } from "react"
import { Marker, useMap, useMapEvent } from "react-leaflet"
import { z3 } from "../../app/utils"
import { createPortal } from "react-dom"
import L, { LatLngExpression } from "leaflet"
import { useColorMode } from "theme-ui"
import { selectOpenFlightmapsOnMap } from "../../services/mapSlice"
import { useAppSelector } from "../../app/hooks"

export const VerticalBoundary = ({
  min,
  max,
  center,
  color,
}: {
  min: number | null
  max: number | null
  center: LatLngExpression | null
  color: string
}) => {
  const map = useMap()
  const [zoom, setZoom] = useState(map.getZoom())

  useMapEvent("zoomend", () => setZoom(map.getZoom()))

  const [colorMode] = useColorMode()
  const ofm = useAppSelector(selectOpenFlightmapsOnMap)

  const icon = color && (
    <div
      className="marker-label"
      sx={{
        filter:
          colorMode === "default" || ofm ? "brightness(.5)" : "brightness(5)",
        color,
      }}
    >
      <div sx={{ borderBottom: `1px solid ${color}` }}>{!!max && z3(max)}</div>
      <div>{!!min && z3(min)}</div>
    </div>
  )

  const element = L.DomUtil.create("div")

  const divIcon = L.divIcon({
    html: element,
    className: "",
    iconSize: [22, 14],
  })

  return (
    center &&
    zoom > 8 && (
      <>
        {createPortal(icon, element)}
        <Marker position={center as LatLngExpression} icon={divIcon}>
          <>Test</>
        </Marker>
      </>
    )
  )
}
