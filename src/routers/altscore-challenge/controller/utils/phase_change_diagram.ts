interface SpecificVolume {
    specific_volume_liquid: number;
    specific_volume_vapor: number;
}

export default function interpolateVolumes(pressure: number): SpecificVolume {
    // Puntos conocidos para el volumen específico del líquido y vapor
    const p1 = 0.05; // MPa
    const v_f1 = 0.00105; // Volumen líquido (m³/kg) en 0.05 MPa
    const v_g1 = 30; // Volumen vapor (m³/kg) en 0.05 MPa

    const p2 = 10; // MPa
    const v_f2 = 0.0035; // Volumen líquido (m³/kg) en 10 MPa
    const v_g2 = 0.0035; // Volumen vapor (m³/kg) en 10 MPa

    // Interpolación para el volumen líquido
    const specific_volume_liquid = v_f1 + ((pressure - p1) * (v_f2 - v_f1)) / (p2 - p1);

    // Interpolación para el volumen de vapor
    const specific_volume_vapor = v_g1 + ((pressure - p1) * (v_g2 - v_g1)) / (p2 - p1);

    const roundTo4Decimals = (value: number) => parseFloat(value.toFixed(5));

    return {
        specific_volume_liquid: roundTo4Decimals(specific_volume_liquid),
        specific_volume_vapor: roundTo4Decimals(specific_volume_vapor)
    };
}