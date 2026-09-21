/**
 * Indicative buying rates. These are SAMPLE figures for layout purposes —
 * live rates should be driven from the pricing sheet / API before launch.
 */

export const materialCategories = [
  {
    id: "non-ferrous",
    name: "Non-Ferrous",
    blurb:
      "The highest-value stream in the yard. Graded by alloy and cleanliness, priced against LME cash settlement.",
    items: [
      { name: "Copper — Bright Bare Bar", grade: "99.9% Cu", rate: "₹ 780 – 845", unit: "per kg" },
      { name: "Copper — Armature / Winding", grade: "Cleaned", rate: "₹ 690 – 735", unit: "per kg" },
      { name: "Copper — Cable Scrap", grade: "Mixed insulation", rate: "₹ 420 – 610", unit: "per kg" },
      { name: "Brass — Honey Grade", grade: "Clean turnings free", rate: "₹ 495 – 540", unit: "per kg" },
      { name: "Aluminium — Extrusion / Section", grade: "6xxx clean", rate: "₹ 185 – 212", unit: "per kg" },
      { name: "Aluminium — Sheet & Utensil", grade: "Mixed", rate: "₹ 145 – 168", unit: "per kg" },
      { name: "Lead — Sheet, Plate & Weights", grade: "Clean", rate: "₹ 152 – 176", unit: "per kg" },
      { name: "Zinc — Die Cast", grade: "Clean", rate: "₹ 205 – 234", unit: "per kg" },
    ],
  },
  {
    id: "ferrous",
    name: "Ferrous",
    blurb:
      "Volume material handled through mobile weighbridges and bulk haulage, benchmarked to the domestic melting index.",
    items: [
      { name: "MS Heavy Melting Scrap (HMS 1)", grade: "6mm+, clean", rate: "₹ 38.5 – 42.0", unit: "per kg" },
      { name: "MS Light / Sheet Cuttings", grade: "Under 6mm", rate: "₹ 33.0 – 36.5", unit: "per kg" },
      { name: "MS Turnings & Borings", grade: "Oil-free", rate: "₹ 26.5 – 30.0", unit: "per kg" },
      { name: "Cast Iron — Machinery", grade: "Broken to size", rate: "₹ 34.0 – 37.5", unit: "per kg" },
      { name: "Stainless Steel 304", grade: "Sheet / pipe", rate: "₹ 128 – 148", unit: "per kg" },
      { name: "Stainless Steel 316", grade: "Sheet / pipe", rate: "₹ 172 – 196", unit: "per kg" },
      { name: "Structural Steel — Beams", grade: "Dismantled", rate: "₹ 39.0 – 43.0", unit: "per kg" },
      { name: "Tin Sheet / Baling Scrap", grade: "Baled", rate: "₹ 24.0 – 27.5", unit: "per kg" },
    ],
  },
  {
    id: "e-waste",
    name: "E-Waste & Boards",
    blurb:
      "Priced on recoverable metal content. Boards are assayed by population density before the final rate is fixed.",
    items: [
      { name: "Server Motherboards", grade: "High-grade populated", rate: "₹ 1,150 – 1,480", unit: "per kg" },
      { name: "Desktop Motherboards", grade: "Mid-grade", rate: "₹ 480 – 640", unit: "per kg" },
      { name: "Laptop — Complete Unit", grade: "Non-working", rate: "₹ 340 – 520", unit: "per unit" },
      { name: "Desktop CPU Cabinet", grade: "Complete", rate: "₹ 520 – 780", unit: "per unit" },
      { name: "LCD / LED Monitor", grade: "Panel intact", rate: "₹ 180 – 310", unit: "per unit" },
      { name: "RAM / Processors", grade: "Gold-pin", rate: "₹ 2,400 – 4,900", unit: "per kg" },
      { name: "SMPS & Power Supplies", grade: "Complete", rate: "₹ 95 – 130", unit: "per kg" },
      { name: "Mixed Low-Grade Boards", grade: "Depopulated", rate: "₹ 180 – 260", unit: "per kg" },
    ],
  },
  {
    id: "lamps",
    name: "Lamps & Lighting",
    blurb:
      "A cost-to-treat stream rather than a buy-back one. Charges below cover sealed drums, mercury-controlled crushing and manifested disposal.",
    items: [
      { name: "T8 / T12 Linear Fluorescent Tube", grade: "Whole, 4 ft", rate: "₹ 14 – 19", unit: "per unit" },
      { name: "T5 Linear Fluorescent Tube", grade: "Whole", rate: "₹ 12 – 16", unit: "per unit" },
      { name: "Compact Fluorescent Lamp (CFL)", grade: "Whole", rate: "₹ 9 – 13", unit: "per unit" },
      { name: "HID — Metal Halide / Sodium", grade: "Whole", rate: "₹ 22 – 34", unit: "per unit" },
      { name: "Mercury Vapour Lamp", grade: "Whole", rate: "₹ 26 – 38", unit: "per unit" },
      { name: "Broken Lamps & Phosphor Debris", grade: "Sealed drum", rate: "₹ 46 – 62", unit: "per kg" },
      { name: "LED Tube / Panel Fitting", grade: "Complete", rate: "₹ 42 – 68", unit: "per kg" },
      { name: "Ballasts, Chokes & Starters", grade: "Copper-wound", rate: "₹ 78 – 104", unit: "per kg" },
    ],
  },
  {
    id: "other",
    name: "Office & Others",
    blurb:
      "Supporting streams from office clearances and fit-outs, so a job stays single-vendor and nothing is left behind on your floor.",
    items: [
      { name: "Workstations & Modular Partitions", grade: "Dismantled", rate: "₹ 24 – 46", unit: "per kg" },
      { name: "Office Chairs & Seating", grade: "Mixed", rate: "₹ 60 – 180", unit: "per unit" },
      { name: "Steel Storage & Filing Cabinets", grade: "Complete", rate: "₹ 32 – 39", unit: "per kg" },
      { name: "ABS / HIPS Regrind", grade: "Sorted by colour", rate: "₹ 46 – 68", unit: "per kg" },
      { name: "PP / HDPE Crates & Drums", grade: "Clean", rate: "₹ 38 – 55", unit: "per kg" },
      { name: "PVC Cable Insulation", grade: "Granulated", rate: "₹ 28 – 42", unit: "per kg" },
      { name: "Office Paper & Records", grade: "Shredded", rate: "₹ 12 – 16", unit: "per kg" },
      { name: "Corrugated Cartons", grade: "Baled dry", rate: "₹ 9 – 13", unit: "per kg" },
    ],
  },
];
