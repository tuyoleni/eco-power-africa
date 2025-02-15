import { MapContainer, TileLayer, Polygon } from 'react-leaflet';
import { LatLngExpression, PathOptions } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../lib/leaflet-config';

interface MapProps {
    center?: LatLngExpression;
    zoom?: number;
    polygonPoints?: LatLngExpression[];
    height?: string;
    width?: string;
    zoomControl?: boolean;
    dragging?: boolean;
    scrollWheelZoom?: boolean;
    polygonOptions?: PathOptions;
}

const Map = ({
    center = [-22.2372, 15.0324],
    zoom = 15,
    polygonPoints = [
        [-22.2272, 15.0224],
        [-22.2372, 15.0324],
        [-22.2472, 15.0424],
        [-22.2372, 15.0524],
        [-22.2272, 15.0224],
    ],
    height = '100%',
    width = '100%',
    zoomControl = false,
    dragging = false,
    scrollWheelZoom = false,
    polygonOptions = {
        color: '#003366',
        weight: 2,
        fillOpacity: 0.1
    }
}: MapProps) => {
    return (
        <MapContainer
            center={center}
            zoom={zoom}
            style={{ height, width }}
            zoomControl={zoomControl}
            dragging={dragging}
            scrollWheelZoom={scrollWheelZoom}
        >
            <TileLayer
                url="https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}"
                maxZoom={20}
                subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
            />
            <Polygon
                positions={polygonPoints}
                pathOptions={polygonOptions}
            />
        </MapContainer>
    );
};

export default Map;