export const mock = [
  ["height", "228"],
  ["mass", "112"],
  ["hair_color", "brown"],
  ["skin_color", "unknown"],
  ["eye_color", "blue"],
  ["birth_year", "200BBY"],
  ["gender", "male"],
  [
    "homeworld",
    {
      name: "Kashyyyk",
      rotation_period: "26",
      orbital_period: "381",
      diameter: "12765",
      climate: "tropical",
      gravity: "1 standard",
      terrain: "jungle, forests, lakes, rivers",
      surface_water: "60",
      population: "45000000"
    }
  ],
  [
    "films",
    [
      "The Empire Strikes Back",
      "Revenge of the Sith",
      "Return of the Jedi",
      "A New Hope",
      "The Force Awakens"
    ]
  ],
  [
    "species",
    [
      {
        name: "Wookiee",
        classification: "mammal",
        designation: "sentient",
        average_height: "210",
        skin_colors: "gray",
        hair_colors: "black, brown",
        eye_colors: "blue, green, yellow, brown, golden, red",
        average_lifespan: "400",
        homeworld: "https://swapi.co/api/planets/14/",
        language: "Shyriiwook"
      }
    ]
  ],
  [
    "vehicles",
    [
      {
        name: "AT-ST",
        model: "All Terrain Scout Transport",
        manufacturer:
          "Kuat Drive Yards, Imperial Department of Military Research",
        cost_in_credits: "unknown",
        length: "2",
        max_atmosphering_speed: "90",
        crew: "2",
        passengers: "0",
        cargo_capacity: "200",
        consumables: "none",
        vehicle_class: "walker"
      }
    ]
  ],
  [
    "starships",
    [
      {
        name: "Millennium Falcon",
        model: "YT-1300 light freighter",
        manufacturer: "Corellian Engineering Corporation",
        cost_in_credits: "100000",
        length: "34.37",
        max_atmosphering_speed: "1050",
        crew: "4",
        passengers: "6",
        cargo_capacity: "100000",
        consumables: "2 months",
        hyperdrive_rating: "0.5",
        MGLT: "75",
        starship_class: "Light freighter"
      },
      {
        name: "Imperial shuttle",
        model: "Lambda-class T-4a shuttle",
        manufacturer: "Sienar Fleet Systems",
        cost_in_credits: "240000",
        length: "20",
        max_atmosphering_speed: "850",
        crew: "6",
        passengers: "20",
        cargo_capacity: "80000",
        consumables: "2 months",
        hyperdrive_rating: "1.0",
        MGLT: "50",
        starship_class: "Armed government transport"
      }
    ]
  ]
];
