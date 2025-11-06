(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/courses.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CATEGORIES",
    ()=>CATEGORIES,
    "COURSES",
    ()=>COURSES,
    "LEVELS",
    ()=>LEVELS,
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Raw list provided by the client — code, title
const RAW_COURSES = [
    [
        "111111",
        "Chief Executive or Managing Director"
    ],
    [
        "111211",
        "Corporate General Manager"
    ],
    [
        "121111",
        "Aquaculture Farmer"
    ],
    [
        "121311",
        "Apiarist"
    ],
    [
        "121313",
        "Dairy Cattle Farmer"
    ],
    [
        "121315",
        "Goat Farmer"
    ],
    [
        "121318",
        "Pig Farmer"
    ],
    [
        "121321",
        "Poultry Farmer"
    ],
    [
        "121611",
        "Flower Grower"
    ],
    [
        "131112",
        "Sales and Marketing Manager"
    ],
    [
        "131113",
        "Advertising Manager"
    ],
    [
        "132111",
        "Corporate Services Manager"
    ],
    [
        "132211",
        "Finance Manager"
    ],
    [
        "132311",
        "Human Resource Manager"
    ],
    [
        "132411",
        "Policy and Planning Manager"
    ],
    [
        "132511",
        "Research and Development Manager"
    ],
    [
        "133111",
        "Construction Project Manager"
    ],
    [
        "133112",
        "Project Builder"
    ],
    [
        "133211",
        "Engineering Manager"
    ],
    [
        "133511",
        "Production Manager (Forestry)"
    ],
    [
        "133512",
        "Production Manager (Manufacturing)"
    ],
    [
        "133611",
        "Supply and Distribution Manager"
    ],
    [
        "133612",
        "Procurement Manager"
    ],
    [
        "134211",
        "Medical Administrator / Medical Superintendent"
    ],
    [
        "134212",
        "Nursing Clinical Director"
    ],
    [
        "134213",
        "Primary Health Organisation Manager"
    ],
    [
        "134311",
        "School Principal"
    ],
    [
        "134411",
        "Faculty Head"
    ],
    [
        "134499",
        "Education Managers nec"
    ],
    [
        "135111",
        "Chief Information Officer"
    ],
    [
        "135112",
        "ICT Project Manager"
    ],
    [
        "135199",
        "ICT Managers nec"
    ],
    [
        "139911",
        "Arts Administrator or Manager"
    ],
    [
        "139912",
        "Environmental Manager"
    ],
    [
        "139913",
        "Laboratory Manager"
    ],
    [
        "139916",
        "Quality Assurance Manager"
    ],
    [
        "139917",
        "Regulatory Affairs Manager"
    ],
    [
        "141311",
        "Hotel or Motel Manager"
    ],
    [
        "141411",
        "Licensed Club Manager"
    ],
    [
        "141999",
        "Accommodation and Hospitality Managers nec"
    ],
    [
        "142111",
        "Retail Manager (General)"
    ],
    [
        "142116",
        "Travel Agency Manager"
    ],
    [
        "149411",
        "Fleet Manager"
    ],
    [
        "149911",
        "Boarding Kennel or Cattery Operator"
    ],
    [
        "149912",
        "Cinema or Theatre Manager"
    ],
    [
        "149915",
        "Equipment Hire Manager"
    ],
    [
        "149999",
        "Hospitality, Retail and Service Managers nec"
    ],
    [
        "212111",
        "Artistic Director"
    ],
    [
        "212315",
        "Program Director (Television or Radio)"
    ],
    [
        "212316",
        "Stage Manager"
    ],
    [
        "212317",
        "Technical Director"
    ],
    [
        "212318",
        "Video Producer"
    ],
    [
        "212413",
        "Print Journalist"
    ],
    [
        "212414",
        "Radio Journalist"
    ],
    [
        "212415",
        "Technical Writer"
    ],
    [
        "212416",
        "Television Journalist"
    ],
    [
        "212499",
        "Journalists and Other Writers nec"
    ],
    [
        "221111",
        "Accountant (General)"
    ],
    [
        "221112",
        "Management Accountant"
    ],
    [
        "221113",
        "Taxation Accountant"
    ],
    [
        "221211",
        "Company Secretary"
    ],
    [
        "221213",
        "External Auditor"
    ],
    [
        "221214",
        "Internal Auditor"
    ],
    [
        "222112",
        "Finance Broker"
    ],
    [
        "222113",
        "Insurance Broker"
    ],
    [
        "222311",
        "Financial Investment Adviser"
    ],
    [
        "223111",
        "Human Resource Adviser"
    ],
    [
        "223112",
        "Recruitment Consultant"
    ],
    [
        "223113",
        "Workplace Relations Adviser"
    ],
    [
        "224111",
        "Actuary"
    ],
    [
        "224112",
        "Mathematician"
    ],
    [
        "224114",
        "Data Analyst"
    ],
    [
        "224115",
        "Data Scientist"
    ],
    [
        "224116",
        "Statistician"
    ],
    [
        "224511",
        "Land Economist"
    ],
    [
        "224512",
        "Valuer"
    ],
    [
        "224712",
        "Organisation and Methods Analyst"
    ],
    [
        "224713",
        "Management Consultant"
    ],
    [
        "224714",
        "Supply Chain Analyst"
    ],
    [
        "224914",
        "Patents Examiner"
    ],
    [
        "224999",
        "Information and Organisation Professionals nec"
    ],
    [
        "225111",
        "Advertising Specialist"
    ],
    [
        "225113",
        "Marketing Specialist"
    ],
    [
        "225114",
        "Content Creator (Marketing)"
    ],
    [
        "225211",
        "ICT Account Manager"
    ],
    [
        "225212",
        "ICT Business Development Manager"
    ],
    [
        "225213",
        "ICT Sales Representative"
    ],
    [
        "225311",
        "Public Relations Professional"
    ],
    [
        "225411",
        "Sales Representative (Industrial Products)"
    ],
    [
        "225412",
        "Sales Representative (Medical and Pharmaceutical Products)"
    ],
    [
        "225499",
        "Technical Sales Representatives nec"
    ],
    [
        "231111",
        "Aeroplane Pilot"
    ],
    [
        "231113",
        "Flying Instructor"
    ],
    [
        "231114",
        "Helicopter Pilot"
    ],
    [
        "231199",
        "Air Transport Professionals nec"
    ],
    [
        "232111",
        "Architect"
    ],
    [
        "232112",
        "Landscape Architect"
    ],
    [
        "232212",
        "Surveyor"
    ],
    [
        "232213",
        "Cartographer"
    ],
    [
        "232214",
        "Other Spatial Scientist"
    ],
    [
        "232313",
        "Jewellery Designer"
    ],
    [
        "232412",
        "Illustrator"
    ],
    [
        "232413",
        "Multimedia Designer"
    ],
    [
        "232414",
        "Web Designer"
    ],
    [
        "232511",
        "Interior Designer"
    ],
    [
        "232611",
        "Urban and Regional Planner"
    ],
    [
        "233111",
        "Chemical Engineer"
    ],
    [
        "233112",
        "Materials Engineer"
    ],
    [
        "233211",
        "Civil Engineer"
    ],
    [
        "233212",
        "Geotechnical Engineer"
    ],
    [
        "233213",
        "Quantity Surveyor"
    ],
    [
        "233214",
        "Structural Engineer"
    ],
    [
        "233215",
        "Transport Engineer"
    ],
    [
        "233311",
        "Electrical Engineer"
    ],
    [
        "233411",
        "Electronics Engineer"
    ],
    [
        "233511",
        "Industrial Engineer"
    ],
    [
        "233512",
        "Mechanical Engineer"
    ],
    [
        "233513",
        "Production or Plant Engineer"
    ],
    [
        "233611",
        "Mining Engineer (excluding Petroleum)"
    ],
    [
        "233612",
        "Petroleum Engineer"
    ],
    [
        "233911",
        "Aeronautical Engineer"
    ],
    [
        "233912",
        "Agricultural Engineer"
    ],
    [
        "233913",
        "Biomedical Engineer"
    ],
    [
        "233914",
        "Engineering Technologist"
    ],
    [
        "233915",
        "Environmental Engineer"
    ],
    [
        "233916",
        "Naval Architect / Marine Designer"
    ],
    [
        "233999",
        "Engineering Professionals nec"
    ],
    [
        "234111",
        "Agricultural Consultant"
    ],
    [
        "234114",
        "Agricultural Research Scientist"
    ],
    [
        "234115",
        "Agronomist"
    ],
    [
        "234116",
        "Aquaculture or Fisheries Scientist"
    ],
    [
        "234211",
        "Chemist"
    ],
    [
        "234212",
        "Food Technologist"
    ],
    [
        "234213",
        "Wine Maker"
    ],
    [
        "234312",
        "Environmental Consultant"
    ],
    [
        "234399",
        "Environmental Scientists nec"
    ],
    [
        "234411",
        "Geologist"
    ],
    [
        "234412",
        "Geophysicist"
    ],
    [
        "234413",
        "Hydrogeologist"
    ],
    [
        "234511",
        "Life Scientist (General)"
    ],
    [
        "234513",
        "Biochemist"
    ],
    [
        "234515",
        "Botanist"
    ],
    [
        "234516",
        "Marine Biologist"
    ],
    [
        "234521",
        "Entomologist"
    ],
    [
        "234522",
        "Zoologist"
    ],
    [
        "234599",
        "Life Scientists nec"
    ],
    [
        "234612",
        "Respiratory Scientist"
    ],
    [
        "234711",
        "Veterinarian"
    ],
    [
        "234911",
        "Conservator"
    ],
    [
        "234912",
        "Metallurgist"
    ],
    [
        "234913",
        "Meteorologist"
    ],
    [
        "234914",
        "Physicist"
    ],
    [
        "234999",
        "Natural and Physical Science Professionals nec"
    ],
    [
        "241111",
        "Early Childhood (Pre-primary School) Teacher"
    ],
    [
        "241213",
        "Primary School Teacher"
    ],
    [
        "241311",
        "Middle School Teacher / Intermediate School Teacher"
    ],
    [
        "241411",
        "Secondary School Teacher"
    ],
    [
        "241511",
        "Special Needs Teacher"
    ],
    [
        "241512",
        "Teacher of the Hearing Impaired"
    ],
    [
        "241513",
        "Teacher of the Sight Impaired"
    ],
    [
        "241599",
        "Special Education Teachers nec"
    ],
    [
        "242111",
        "University Lecturer"
    ],
    [
        "242211",
        "Vocational Education Teacher / Polytechnic Teacher"
    ],
    [
        "249112",
        "Education Reviewer"
    ],
    [
        "249214",
        "Music Teacher (Private Tuition)"
    ],
    [
        "249299",
        "Private Tutors and Teachers nec"
    ],
    [
        "251111",
        "Dietitian"
    ],
    [
        "251211",
        "Medical Diagnostic Radiographer"
    ],
    [
        "251212",
        "Medical Radiation Therapist"
    ],
    [
        "251213",
        "Nuclear Medicine Technologist"
    ],
    [
        "251214",
        "Sonographer"
    ],
    [
        "251312",
        "Occupational Health and Safety Adviser"
    ],
    [
        "251411",
        "Optometrist"
    ],
    [
        "251412",
        "Orthoptist"
    ],
    [
        "251511",
        "Hospital Pharmacist"
    ],
    [
        "251512",
        "Industrial Pharmacist"
    ],
    [
        "251513",
        "Retail Pharmacist"
    ],
    [
        "251912",
        "Orthotist or Prosthetist"
    ],
    [
        "251999",
        "Health Diagnostic and Promotion Professionals nec"
    ],
    [
        "252214",
        "Traditional Chinese Medicine Practitioner"
    ],
    [
        "252299",
        "Complementary Health Therapists nec"
    ],
    [
        "252311",
        "Dental Specialist"
    ],
    [
        "252312",
        "Dentist"
    ],
    [
        "252411",
        "Occupational Therapist"
    ],
    [
        "252511",
        "Physiotherapist"
    ],
    [
        "252611",
        "Podiatrist"
    ],
    [
        "252711",
        "Audiologist"
    ],
    [
        "252712",
        "Speech Pathologist / Speech Language Therapist"
    ],
    [
        "253111",
        "General Practitioner"
    ],
    [
        "253112",
        "Resident Medical Officer"
    ],
    [
        "253211",
        "Anaesthetist"
    ],
    [
        "253311",
        "Specialist Physician (General Medicine)"
    ],
    [
        "253312",
        "Cardiologist"
    ],
    [
        "253313",
        "Clinical Haematologist"
    ],
    [
        "253314",
        "Medical Oncologist"
    ],
    [
        "253315",
        "Endocrinologist"
    ],
    [
        "253316",
        "Gastroenterologist"
    ],
    [
        "253317",
        "Intensive Care Specialist"
    ],
    [
        "253318",
        "Neurologist"
    ],
    [
        "253321",
        "Paediatrician"
    ],
    [
        "253322",
        "Renal Medicine Specialist"
    ],
    [
        "253323",
        "Rheumatologist"
    ],
    [
        "253324",
        "Thoracic Medicine Specialist"
    ],
    [
        "253399",
        "Specialist Physicians nec"
    ],
    [
        "253411",
        "Psychiatrist"
    ],
    [
        "253511",
        "Surgeon (General)"
    ],
    [
        "253512",
        "Cardiothoracic Surgeon"
    ],
    [
        "253513",
        "Neurosurgeon"
    ],
    [
        "253514",
        "Orthopaedic Surgeon"
    ],
    [
        "253515",
        "Otorhinolaryngologist"
    ],
    [
        "253516",
        "Paediatric Surgeon"
    ],
    [
        "253517",
        "Plastic and Reconstructive Surgeon"
    ],
    [
        "253518",
        "Urologist"
    ],
    [
        "253521",
        "Vascular Surgeon"
    ],
    [
        "253911",
        "Dermatologist"
    ],
    [
        "253912",
        "Emergency Medicine Specialist"
    ],
    [
        "253913",
        "Obstetrician and Gynaecologist"
    ],
    [
        "253914",
        "Ophthalmologist"
    ],
    [
        "253915",
        "Pathologist"
    ],
    [
        "253917",
        "Diagnostic and Interventional Radiologist"
    ],
    [
        "253918",
        "Radiation Oncologist"
    ],
    [
        "253999",
        "Medical Practitioners nec"
    ],
    [
        "254111",
        "Midwife"
    ],
    [
        "254211",
        "Nurse Educator"
    ],
    [
        "254212",
        "Nurse Researcher"
    ],
    [
        "254411",
        "Nurse Practitioner"
    ],
    [
        "254412",
        "Registered Nurse (Aged Care)"
    ],
    [
        "254413",
        "Registered Nurse (Child and Family Health)"
    ],
    [
        "254414",
        "Registered Nurse (Community Health)"
    ],
    [
        "254415",
        "Registered Nurse (Critical Care and Emergency)"
    ],
    [
        "254416",
        "Registered Nurse (Developmental Disability)"
    ],
    [
        "254417",
        "Registered Nurse (Disability and Rehabilitation)"
    ],
    [
        "254418",
        "Registered Nurse (Medical)"
    ],
    [
        "254421",
        "Registered Nurse (Medical Practice)"
    ],
    [
        "254422",
        "Registered Nurse (Mental Health)"
    ],
    [
        "254423",
        "Registered Nurse (Perioperative)"
    ],
    [
        "254424",
        "Registered Nurse (Surgical)"
    ],
    [
        "254425",
        "Registered Nurse (Paediatrics)"
    ],
    [
        "254499",
        "Registered Nurses nec"
    ],
    [
        "261111",
        "ICT Business Analyst"
    ],
    [
        "261112",
        "Systems Analyst"
    ],
    [
        "261211",
        "Multimedia Specialist"
    ],
    [
        "261212",
        "Web Developer"
    ],
    [
        "261311",
        "Analyst Programmer"
    ],
    [
        "261312",
        "Developer Programmer"
    ],
    [
        "261313",
        "Software Engineer"
    ],
    [
        "261314",
        "Software Tester"
    ],
    [
        "261315",
        "Cyber Security Engineer"
    ],
    [
        "261316",
        "DevOps Engineer"
    ],
    [
        "261317",
        "Penetration Tester"
    ],
    [
        "261399",
        "Software and Applications Programmers nec"
    ],
    [
        "262111",
        "Database Administrator"
    ],
    [
        "262113",
        "Systems Administrator"
    ],
    [
        "262114",
        "Cyber Governance Risk and Compliance Specialist"
    ],
    [
        "262115",
        "Cyber Security Advice and Assessment Specialist"
    ],
    [
        "262116",
        "Cyber Security Analyst"
    ],
    [
        "262117",
        "Cyber Security Architect"
    ],
    [
        "262118",
        "Cyber Security Operations Coordinator"
    ],
    [
        "263111",
        "Computer Network and Systems Engineer"
    ],
    [
        "263112",
        "Network Administrator"
    ],
    [
        "263113",
        "Network Analyst"
    ],
    [
        "263211",
        "ICT Quality Assurance Engineer"
    ],
    [
        "263213",
        "ICT Systems Test Engineer"
    ],
    [
        "263299",
        "ICT Support and Test Engineers nec"
    ],
    [
        "263312",
        "Telecommunications Network Engineer"
    ],
    [
        "271111",
        "Barrister"
    ],
    [
        "271214",
        "Intellectual Property Lawyer"
    ],
    [
        "271299",
        "Judicial and Other Legal Professionals nec"
    ],
    [
        "271311",
        "Solicitor"
    ],
    [
        "272112",
        "Drug and Alcohol Counsellor"
    ],
    [
        "272114",
        "Rehabilitation Counsellor"
    ],
    [
        "272115",
        "Student Counsellor"
    ],
    [
        "272311",
        "Clinical Psychologist"
    ],
    [
        "272312",
        "Educational Psychologist"
    ],
    [
        "272313",
        "Organisational Psychologist"
    ],
    [
        "272314",
        "Psychotherapist"
    ],
    [
        "272399",
        "Psychologists nec"
    ],
    [
        "272413",
        "Translator"
    ],
    [
        "272511",
        "Social Worker"
    ],
    [
        "272612",
        "Recreation Officer / Recreation Coordinator"
    ],
    [
        "311112",
        "Agricultural and Agritech Technician"
    ],
    [
        "311113",
        "Animal Husbandry Technician"
    ],
    [
        "311114",
        "Aquaculture or Fisheries Technician"
    ],
    [
        "311115",
        "Irrigation Designer"
    ],
    [
        "311211",
        "Anaesthetic Technician"
    ],
    [
        "311212",
        "Cardiac Technician"
    ],
    [
        "311215",
        "Pharmacy Technician"
    ],
    [
        "311217",
        "Respiratory Technician"
    ],
    [
        "311299",
        "Medical Technicians nec"
    ],
    [
        "311312",
        "Meat Inspector"
    ],
    [
        "311314",
        "Primary Products Quality Assurance Officer"
    ],
    [
        "311399",
        "Primary Products Assurance and Inspection Officers nec"
    ],
    [
        "311411",
        "Chemistry Technician"
    ],
    [
        "311412",
        "Earth Science Technician"
    ],
    [
        "311499",
        "Science Technicians nec"
    ],
    [
        "312111",
        "Architectural Draftsperson"
    ],
    [
        "312112",
        "Building Associate"
    ],
    [
        "312113",
        "Building Inspector"
    ],
    [
        "312114",
        "Construction Estimator"
    ],
    [
        "312116",
        "Surveying or Spatial Science Technician"
    ],
    [
        "312199",
        "Architectural, Building and Surveying Technicians nec"
    ],
    [
        "312211",
        "Civil Engineering Draftsperson"
    ],
    [
        "312212",
        "Civil Engineering Technician"
    ],
    [
        "312311",
        "Electrical Engineering Draftsperson"
    ],
    [
        "312312",
        "Electrical Engineering Technician"
    ],
    [
        "312412",
        "Electronic Engineering Technician"
    ],
    [
        "312511",
        "Mechanical Engineering Draftsperson"
    ],
    [
        "312512",
        "Mechanical Engineering Technician"
    ],
    [
        "312911",
        "Maintenance Planner"
    ],
    [
        "312912",
        "Metallurgical or Materials Technician"
    ],
    [
        "312913",
        "Mine Deputy"
    ],
    [
        "312914",
        "Other Draftsperson"
    ],
    [
        "312999",
        "Building and Engineering Technicians nec"
    ],
    [
        "313111",
        "Hardware Technician"
    ],
    [
        "313112",
        "ICT Customer Support Officer"
    ],
    [
        "313113",
        "Web Administrator"
    ],
    [
        "313199",
        "ICT Support Technicians nec"
    ],
    [
        "313212",
        "Telecommunications Field Engineer"
    ],
    [
        "313213",
        "Telecommunications Network Planner"
    ],
    [
        "313214",
        "Telecommunications Technical Officer or Technologist"
    ],
    [
        "321111",
        "Automotive Electrician"
    ],
    [
        "321211",
        "Motor Mechanic (General)"
    ],
    [
        "321212",
        "Diesel Motor Mechanic"
    ],
    [
        "321213",
        "Motorcycle Mechanic"
    ],
    [
        "321214",
        "Small Engine Mechanic"
    ],
    [
        "322112",
        "Electroplater"
    ],
    [
        "322113",
        "Farrier"
    ],
    [
        "322114",
        "Metal Casting Trades Worker"
    ],
    [
        "322211",
        "Sheetmetal Worker"
    ],
    [
        "322311",
        "Metal Fabricator"
    ],
    [
        "322312",
        "Pressure Welder"
    ],
    [
        "322313",
        "Welder (First Class)"
    ],
    [
        "323111",
        "Aircraft Maintenance Engineer (Avionics)"
    ],
    [
        "323112",
        "Aircraft Maintenance Engineer (Mechanical)"
    ],
    [
        "323113",
        "Aircraft Maintenance Engineer (Structures)"
    ],
    [
        "323211",
        "Fitter (General)"
    ],
    [
        "323212",
        "Fitter and Turner"
    ],
    [
        "323213",
        "Fitter-Welder"
    ],
    [
        "323214",
        "Metal Machinist (First Class)"
    ],
    [
        "323215",
        "Textile, Clothing and Footwear Mechanic"
    ],
    [
        "323299",
        "Metal Fitters and Machinists nec"
    ],
    [
        "323313",
        "Locksmith"
    ],
    [
        "323314",
        "Precision Instrument Maker and Repairer"
    ],
    [
        "323411",
        "Engineering Patternmaker"
    ],
    [
        "323412",
        "Toolmaker"
    ],
    [
        "324111",
        "Panelbeater"
    ],
    [
        "324211",
        "Vehicle Body Builder"
    ],
    [
        "324212",
        "Vehicle Trimmer"
    ],
    [
        "324311",
        "Vehicle Painter"
    ],
    [
        "331111",
        "Bricklayer"
    ],
    [
        "331112",
        "Stonemason"
    ],
    [
        "331211",
        "Carpenter and Joiner"
    ],
    [
        "331212",
        "Carpenter"
    ],
    [
        "331213",
        "Joiner"
    ],
    [
        "332111",
        "Floor Finisher"
    ],
    [
        "332211",
        "Painter"
    ],
    [
        "333111",
        "Glazier"
    ],
    [
        "333211",
        "Plasterer (Wall and Ceiling)"
    ],
    [
        "333212",
        "Renderer (Solid Plaster)"
    ],
    [
        "333311",
        "Roof Tiler"
    ],
    [
        "333411",
        "Wall and Floor Tiler"
    ],
    [
        "334112",
        "Airconditioning and Mechanical Services Plumber"
    ],
    [
        "334113",
        "Drainer"
    ],
    [
        "334114",
        "Gasfitter"
    ],
    [
        "334115",
        "Roof Plumber"
    ],
    [
        "334116",
        "Plumber (General)"
    ],
    [
        "334117",
        "Fire Protection Plumber"
    ],
    [
        "341111",
        "Electrician (General)"
    ],
    [
        "341112",
        "Electrician (Special Class)"
    ],
    [
        "342111",
        "Airconditioning and Refrigeration Mechanic"
    ],
    [
        "342211",
        "Electrical Linesworker / Electrical Line Mechanic"
    ],
    [
        "342212",
        "Technical Cable Jointer"
    ],
    [
        "342311",
        "Business Machine Mechanic"
    ],
    [
        "342313",
        "Electronic Equipment Trades Worker"
    ],
    [
        "342314",
        "Electronic Instrument Trades Worker (General)"
    ],
    [
        "342315",
        "Electronic Instrument Trades Worker (Special Class)"
    ],
    [
        "342411",
        "Cabler (Data and Telecommunications)"
    ],
    [
        "342412",
        "Telecommunications Cable Jointer"
    ],
    [
        "342413",
        "Telecommunications Linesworker / Telecommunications Line Mechanic"
    ],
    [
        "342414",
        "Telecommunications Technician"
    ],
    [
        "351111",
        "Baker"
    ],
    [
        "351112",
        "Pastrycook"
    ],
    [
        "351211",
        "Butcher or Smallgoods Maker"
    ],
    [
        "351311",
        "Chef"
    ],
    [
        "351411",
        "Cook"
    ],
    [
        "361111",
        "Dog Handler or Trainer"
    ],
    [
        "361112",
        "Horse Trainer"
    ],
    [
        "361311",
        "Veterinary Nurse"
    ],
    [
        "362411",
        "Nurseryperson"
    ],
    [
        "362511",
        "Arborist"
    ],
    [
        "362512",
        "Tree Worker"
    ],
    [
        "362711",
        "Landscape Gardener"
    ],
    [
        "362712",
        "Irrigation Technician"
    ],
    [
        "391111",
        "Hairdresser"
    ],
    [
        "392111",
        "Print Finisher"
    ],
    [
        "392112",
        "Screen Printer"
    ],
    [
        "392211",
        "Graphic Pre-press Trades Worker"
    ],
    [
        "392311",
        "Printing Machinist"
    ],
    [
        "393114",
        "Shoemaker"
    ],
    [
        "393311",
        "Upholsterer"
    ],
    [
        "394112",
        "Cabinet Maker"
    ],
    [
        "394113",
        "Furniture Maker"
    ],
    [
        "394211",
        "Furniture Finisher"
    ],
    [
        "394212",
        "Picture Framer"
    ],
    [
        "394213",
        "Wood Machinist"
    ],
    [
        "394299",
        "Wood Machinists and Other Wood Trades Workers nec"
    ],
    [
        "399111",
        "Boat Builder and Repairer"
    ],
    [
        "399112",
        "Shipwright"
    ],
    [
        "399211",
        "Chemical Plant Operator"
    ],
    [
        "399212",
        "Gas or Petroleum Operator"
    ],
    [
        "399213",
        "Power Generation Plant Operator"
    ],
    [
        "399513",
        "Light Technician"
    ],
    [
        "399516",
        "Sound Technician"
    ],
    [
        "399599",
        "Performing Arts Technicians nec"
    ],
    [
        "399611",
        "Signwriter"
    ],
    [
        "399911",
        "Diver"
    ],
    [
        "399913",
        "Optical Dispenser / Dispensing Optician"
    ],
    [
        "399914",
        "Optical Mechanic"
    ],
    [
        "399916",
        "Plastics Technician"
    ],
    [
        "399918",
        "Fire Protection Equipment Technician"
    ],
    [
        "399999",
        "Technicians and Trades Workers nec"
    ],
    [
        "411111",
        "Ambulance Officer"
    ],
    [
        "411112",
        "Intensive Care Ambulance Paramedic"
    ],
    [
        "411211",
        "Dental Hygienist"
    ],
    [
        "411212",
        "Dental Prosthetist"
    ],
    [
        "411213",
        "Dental Technician"
    ],
    [
        "411214",
        "Dental Therapist"
    ],
    [
        "411311",
        "Diversional Therapist"
    ],
    [
        "411411",
        "Enrolled Nurse"
    ],
    [
        "411611",
        "Massage Therapist"
    ],
    [
        "411711",
        "Community Worker"
    ],
    [
        "411713",
        "Family Support Worker"
    ],
    [
        "411715",
        "Residential Care Officer"
    ],
    [
        "411716",
        "Youth Worker"
    ],
    [
        "421111",
        "Child Care Worker"
    ],
    [
        "421114",
        "Out of School Hours Care Worker"
    ],
    [
        "431411",
        "Hotel Service Manager"
    ],
    [
        "451111",
        "Beauty Therapist"
    ],
    [
        "451412",
        "Tour Guide"
    ],
    [
        "451612",
        "Travel Consultant"
    ],
    [
        "451711",
        "Flight Attendant"
    ],
    [
        "452311",
        "Diving Instructor (Open Water)"
    ],
    [
        "452317",
        "Other Sports Coach or Instructor (Wushu Martial Arts Coach or Yoga Instructor Only)"
    ],
    [
        "452321",
        "Sports Development Officer"
    ],
    [
        "511111",
        "Contract Administrator"
    ],
    [
        "511112",
        "Program or Project Administrator"
    ],
    [
        "512111",
        "Office Manager"
    ],
    [
        "521212",
        "Legal Secretary"
    ],
    [
        "599111",
        "Conveyancer"
    ],
    [
        "599211",
        "Clerk of Court"
    ],
    [
        "599612",
        "Insurance Loss Adjuster"
    ],
    [
        "599915",
        "Clinical Coder"
    ],
    [
        "611211",
        "Insurance Agent"
    ],
    [
        "639211",
        "Retail Buyer"
    ]
];
function slugify(input) {
    return input.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
function categorize(code) {
    const prefix = code.slice(0, 2);
    // coarse mapping based on occupation groups - safe default categories for filtering
    switch(prefix){
        case "11":
        case "13":
            return "Management";
        case "12":
        case "31":
        case "32":
            return "Agriculture & Technical";
        case "14":
        case "35":
        case "45":
            return "Hospitality";
        case "21":
            return "Media & Arts";
        case "22":
        case "23":
            return "Business & Finance";
        case "23":
            return "Engineering";
        case "24":
            return "Education";
        case "25":
        case "26":
            return "Healthcare";
        case "26":
            return "ICT";
        case "27":
            return "Legal & Community";
        case "33":
        case "34":
        case "39":
            return "Trades & Construction";
        case "36":
            return "Horticulture & Animal Care";
        case "41":
        case "42":
            return "Community & Care";
        case "43":
        case "51":
        case "52":
            return "Administration";
        case "59":
        case "61":
            return "Legal & Insurance";
        case "63":
            return "Retail";
        default:
            // last-resort mapping based on first digit
            const first = code.charAt(0);
            if (first === "2") return "Professional Services";
            if (first === "3" || first === "4") return "Trades & Services";
            return "Other";
    }
}
const COURSES = RAW_COURSES.map(_c = ([code, title])=>({
        code,
        title,
        category: categorize(code),
        level: "Varies",
        slug: slugify(title)
    }));
_c1 = COURSES;
const CATEGORIES = Array.from(new Set(COURSES.map((c)=>c.category))).sort();
const LEVELS = Array.from(new Set(COURSES.map((c)=>c.level))).sort();
const __TURBOPACK__default__export__ = COURSES;
var _c, _c1;
__turbopack_context__.k.register(_c, "COURSES$RAW_COURSES.map");
__turbopack_context__.k.register(_c1, "COURSES");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/courses/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Laptop$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/laptop.js [app-client] (ecmascript) <export default as Laptop>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hospital$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hospital$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hospital.js [app-client] (ecmascript) <export default as Hospital>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-no-axes-column.js [app-client] (ecmascript) <export default as BarChart2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/coffee.js [app-client] (ecmascript) <export default as Coffee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$courses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/courses.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const CoursesPage = ()=>{
    _s();
    const heroRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const searchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const categoriesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const locationsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const featuredRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [selectedLevel, setSelectedLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [displayCount, setDisplayCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(16); // Start with 4 rows of 4 courses
    // Use centralized courses data
    const courses = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$courses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    // Build UI-friendly lists for filters, include an 'All' option
    const categories = [
        "All",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$courses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORIES"]
    ];
    const levels = Array.from(new Set([
        "All",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$courses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEVELS"],
        "Certificate",
        "Diploma",
        "Bachelor",
        "Master",
        "PhD"
    ]));
    const cities = [
        {
            name: "Melbourne",
            description: "Australia's Cultural & Academic Capital",
            highlights: [
                "University of Melbourne",
                "Monash University",
                "Strong job market in IT, healthcare, engineering"
            ],
            image: "/locations/Melbourne.jpg"
        },
        {
            name: "Sydney",
            description: "Your Gateway to Global Opportunities",
            highlights: [
                "University of Sydney",
                "UNSW",
                "Largest job market: finance, tech, media"
            ],
            image: "/locations/Sydney.jpg"
        },
        {
            name: "Brisbane",
            description: "Study, Work & Thrive in the Sunshine State",
            highlights: [
                "University of Queensland",
                "QUT",
                "Growing sectors in health, research, education"
            ],
            image: "/locations/Brisbane%20.jpg"
        },
        {
            name: "Adelaide",
            description: "Affordable, Relaxed & Full of Opportunities",
            highlights: [
                "University of Adelaide",
                "Flinders University",
                "Affordable living, wine regions"
            ],
            image: "/locations/Adelaide.jpg"
        },
        {
            name: "Perth",
            description: "Study by the Beach, Work in Emerging Industries",
            highlights: [
                "University of Western Australia",
                "Curtin University",
                "Mining, energy, technology"
            ],
            image: "/locations/Perth.jpg"
        },
        {
            name: "Canberra",
            description: "Study Where Knowledge Meets Opportunity",
            highlights: [
                "Australian National University",
                "University of Canberra",
                "Government opportunities"
            ],
            image: "/locations/Canberra.jpg"
        }
    ];
    const filteredCourses = courses.filter((course)=>{
        const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || course.code.includes(searchTerm);
        const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
        const matchesLevel = selectedLevel === "All" || course.level.includes(selectedLevel);
        return matchesSearch && matchesCategory && matchesLevel;
    });
    // Helper function to reset pagination when filters change
    const resetPagination = ()=>setDisplayCount(16);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CoursesPage.useEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                "CoursesPage.useEffect.ctx": ()=>{
                    // Hero Animation
                    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline();
                    tl.fromTo(".hero-title", {
                        opacity: 0,
                        y: 50
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        stagger: 0.2
                    });
                    tl.fromTo(".hero-subtitle", {
                        opacity: 0,
                        y: 30
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8
                    }, "-=0.5");
                    // Search Section Animation
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(".search-container", {
                        opacity: 0,
                        y: 50
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: searchRef.current,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    });
                    // Categories Animation
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(".category-card", {
                        opacity: 0,
                        y: 30,
                        scale: 0.9
                    }, {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        stagger: 0.1,
                        scrollTrigger: {
                            trigger: categoriesRef.current,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    });
                    // Locations Animation
                    // NOTE: avoid changing opacity for location cards and do not reverse the animation
                    // when scrolling back — this prevents location content from becoming invisible
                    // after user interactions (for example when clicking a category and jumping/scrolling).
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(".location-card", {
                        x: -50,
                        rotationY: 15
                    }, {
                        x: 0,
                        rotationY: 0,
                        duration: 1,
                        stagger: 0.2,
                        scrollTrigger: {
                            trigger: locationsRef.current,
                            start: "top 80%",
                            // play once when it enters the viewport; do not reverse/hide on scroll up
                            toggleActions: "play none none none"
                        }
                    });
                    // Featured Courses Animation
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(".course-item", {
                        opacity: 0,
                        y: 30
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.1,
                        scrollTrigger: {
                            trigger: featuredRef.current,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    });
                // Note: removed parallax container / background animation —
                // hero video is now a static background element so no parallax animation is required.
                }
            }["CoursesPage.useEffect.ctx"]);
            return ({
                "CoursesPage.useEffect": ()=>ctx.revert()
            })["CoursesPage.useEffect"];
        }
    }["CoursesPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: heroRef,
                className: "relative h-screen flex items-center justify-center overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                className: "absolute inset-0 w-full h-full object-cover opacity-70",
                                src: "/main.mp4",
                                autoPlay: true,
                                loop: true,
                                muted: true,
                                playsInline: true
                            }, void 0, false, {
                                fileName: "[project]/app/courses/page.tsx",
                                lineNumber: 239,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-black/40 backdrop-blur-sm z-10 pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/app/courses/page.tsx",
                                lineNumber: 248,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/courses/page.tsx",
                        lineNumber: 238,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 text-center text-white px-4 max-w-5xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "hero-title text-6xl md:text-8xl font-momo mb-6",
                                children: [
                                    "Explore ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary",
                                        children: "Courses"
                                    }, void 0, false, {
                                        fileName: "[project]/app/courses/page.tsx",
                                        lineNumber: 253,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/courses/page.tsx",
                                lineNumber: 252,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "hero-subtitle text-xl md:text-2xl font-semibold leading-relaxed mb-4",
                                children: "Discover Your Perfect Study Program"
                            }, void 0, false, {
                                fileName: "[project]/app/courses/page.tsx",
                                lineNumber: 255,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "hero-subtitle text-lg md:text-xl opacity-90",
                                children: "From English language programs to master's degrees - find the course that matches your career goals"
                            }, void 0, false, {
                                fileName: "[project]/app/courses/page.tsx",
                                lineNumber: 258,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/courses/page.tsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/courses/page.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: searchRef,
                className: "py-16 px-4 bg-gray-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl font-bold text-secondary mb-4",
                                    children: "Find Your Perfect Course"
                                }, void 0, false, {
                                    fileName: "[project]/app/courses/page.tsx",
                                    lineNumber: 270,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-gray-600 max-w-2xl mx-auto",
                                    children: [
                                        "Browse through ",
                                        courses.length,
                                        "+ courses across multiple categories and find the one that matches your career goals"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/courses/page.tsx",
                                    lineNumber: 273,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/courses/page.tsx",
                            lineNumber: 269,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-4xl mx-auto mb-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search courses by name, code, or keyword...",
                                        value: searchTerm,
                                        onChange: (e)=>{
                                            setSearchTerm(e.target.value);
                                            resetPagination();
                                        },
                                        className: "w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/app/courses/page.tsx",
                                        lineNumber: 282,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-4 top-1/2 transform -translate-y-1/2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-6 h-6 text-gray-400",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            }, void 0, false, {
                                                fileName: "[project]/app/courses/page.tsx",
                                                lineNumber: 299,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/courses/page.tsx",
                                            lineNumber: 293,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/courses/page.tsx",
                                        lineNumber: 292,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/courses/page.tsx",
                                lineNumber: 281,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/courses/page.tsx",
                            lineNumber: 280,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center justify-center gap-4 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium text-gray-700",
                                            children: "Category:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/courses/page.tsx",
                                            lineNumber: 313,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: selectedCategory,
                                            onChange: (e)=>{
                                                setSelectedCategory(e.target.value);
                                                resetPagination();
                                            },
                                            className: "px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary bg-white text-sm font-medium",
                                            children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: category,
                                                    children: category
                                                }, category, false, {
                                                    fileName: "[project]/app/courses/page.tsx",
                                                    lineNumber: 325,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/app/courses/page.tsx",
                                            lineNumber: 316,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/courses/page.tsx",
                                    lineNumber: 312,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium text-gray-700",
                                            children: "Level:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/courses/page.tsx",
                                            lineNumber: 333,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: selectedLevel,
                                            onChange: (e)=>{
                                                setSelectedLevel(e.target.value);
                                                resetPagination();
                                            },
                                            className: "px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary bg-white text-sm font-medium",
                                            children: levels.map((level)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: level,
                                                    children: level
                                                }, level, false, {
                                                    fileName: "[project]/app/courses/page.tsx",
                                                    lineNumber: 343,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/app/courses/page.tsx",
                                            lineNumber: 334,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/courses/page.tsx",
                                    lineNumber: 332,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                (selectedCategory !== "All" || selectedLevel !== "All" || searchTerm) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setSelectedCategory("All");
                                        setSelectedLevel("All");
                                        setSearchTerm("");
                                        resetPagination();
                                    },
                                    className: "px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors",
                                    children: "Clear filters"
                                }, void 0, false, {
                                    fileName: "[project]/app/courses/page.tsx",
                                    lineNumber: 353,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/courses/page.tsx",
                            lineNumber: 311,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-lg",
                                children: [
                                    "Showing",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-secondary",
                                        children: filteredCourses.length
                                    }, void 0, false, {
                                        fileName: "[project]/app/courses/page.tsx",
                                        lineNumber: 371,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    "of ",
                                    courses.length,
                                    " courses"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/courses/page.tsx",
                                lineNumber: 369,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/courses/page.tsx",
                            lineNumber: 368,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/courses/page.tsx",
                    lineNumber: 267,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/courses/page.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            selectedCategory === "All" && selectedLevel === "All" && !searchTerm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 px-4 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold text-center text-secondary mb-12",
                            children: "Browse by Category"
                        }, void 0, false, {
                            fileName: "[project]/app/courses/page.tsx",
                            lineNumber: 384,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
                            children: categories.slice(1).map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setSelectedCategory(category);
                                        resetPagination();
                                    },
                                    className: "category-pill bg-gray-50 hover:bg-primary/10 border border-gray-200 hover:border-primary/30 rounded-xl p-4 text-center transition-all duration-200 group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform",
                                            children: category === "ICT" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Laptop$3e$__["Laptop"], {
                                                className: "text-primary",
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/app/courses/page.tsx",
                                                lineNumber: 400,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)) : category === "Healthcare" || category.includes("Health") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hospital$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hospital$3e$__["Hospital"], {
                                                className: "text-primary",
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/app/courses/page.tsx",
                                                lineNumber: 403,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)) : category === "Engineering" || category.includes("Engineer") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                className: "text-primary",
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/app/courses/page.tsx",
                                                lineNumber: 406,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)) : category === "Business & Finance" || category === "Management" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart2$3e$__["BarChart2"], {
                                                className: "text-primary",
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/app/courses/page.tsx",
                                                lineNumber: 409,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)) : category === "Education" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                                className: "text-primary",
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/app/courses/page.tsx",
                                                lineNumber: 411,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
                                                className: "text-primary",
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/app/courses/page.tsx",
                                                lineNumber: 413,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/courses/page.tsx",
                                            lineNumber: 398,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-semibold text-gray-700 group-hover:text-primary transition-colors",
                                            children: category
                                        }, void 0, false, {
                                            fileName: "[project]/app/courses/page.tsx",
                                            lineNumber: 416,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 mt-1",
                                            children: [
                                                courses.filter((c)=>c.category === category).length,
                                                " ",
                                                "courses"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/courses/page.tsx",
                                            lineNumber: 419,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, category, true, {
                                    fileName: "[project]/app/courses/page.tsx",
                                    lineNumber: 390,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/app/courses/page.tsx",
                            lineNumber: 388,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/courses/page.tsx",
                    lineNumber: 383,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/courses/page.tsx",
                lineNumber: 382,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: featuredRef,
                className: "py-16 px-4 bg-gray-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: filteredCourses.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl font-bold text-secondary mb-4",
                                        children: selectedCategory === "All" && selectedLevel === "All" && !searchTerm ? "All Courses" : "Search Results"
                                    }, void 0, false, {
                                        fileName: "[project]/app/courses/page.tsx",
                                        lineNumber: 436,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    (selectedCategory !== "All" || selectedLevel !== "All" || searchTerm) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: [
                                            selectedCategory !== "All" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/10 text-primary",
                                                children: [
                                                    "Category: ",
                                                    selectedCategory
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/courses/page.tsx",
                                                lineNumber: 448,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            selectedLevel !== "All" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center px-3 py-1 rounded-full text-sm bg-secondary/10 text-secondary",
                                                children: [
                                                    "Level: ",
                                                    selectedLevel
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/courses/page.tsx",
                                                lineNumber: 453,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            searchTerm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-200 text-gray-700",
                                                children: [
                                                    'Search: "',
                                                    searchTerm,
                                                    '"'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/courses/page.tsx",
                                                lineNumber: 458,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/courses/page.tsx",
                                        lineNumber: 446,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/courses/page.tsx",
                                lineNumber: 435,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
                                children: filteredCourses.slice(0, displayCount).map((course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "course-item bg-white rounded-xl p-6 shadow-sm hover:shadow-lg border border-gray-100 hover:border-primary/20 transition-all duration-300 group cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-primary/10 text-primary px-3 py-1 rounded-lg text-xs font-medium",
                                                        children: course.code
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/courses/page.tsx",
                                                        lineNumber: 473,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium",
                                                        children: course.level
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/courses/page.tsx",
                                                        lineNumber: 476,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/courses/page.tsx",
                                                lineNumber: 472,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2 text-lg leading-tight",
                                                children: course.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/courses/page.tsx",
                                                lineNumber: 481,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-gray-500 bg-gray-50 px-2 py-1 rounded",
                                                    children: course.category
                                                }, void 0, false, {
                                                    fileName: "[project]/app/courses/page.tsx",
                                                    lineNumber: 486,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/courses/page.tsx",
                                                lineNumber: 485,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, course.code, true, {
                                        fileName: "[project]/app/courses/page.tsx",
                                        lineNumber: 468,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/app/courses/page.tsx",
                                lineNumber: 466,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            filteredCourses.length > displayCount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mt-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 mb-4",
                                        children: [
                                            "Showing ",
                                            displayCount,
                                            " of ",
                                            filteredCourses.length,
                                            " courses"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/courses/page.tsx",
                                        lineNumber: 496,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setDisplayCount((prev)=>Math.min(prev + 8, filteredCourses.length)),
                                        className: "bg-primary text-white px-8 py-3 rounded-xl font-medium hover:bg-primary/90 transition-all duration-300",
                                        children: [
                                            "Load More Courses (",
                                            Math.min(8, filteredCourses.length - displayCount),
                                            " more)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/courses/page.tsx",
                                        lineNumber: 499,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/courses/page.tsx",
                                lineNumber: 495,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-12 h-12 text-gray-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    }, void 0, false, {
                                        fileName: "[project]/app/courses/page.tsx",
                                        lineNumber: 522,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/courses/page.tsx",
                                    lineNumber: 516,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/courses/page.tsx",
                                lineNumber: 515,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-semibold text-gray-600 mb-2",
                                children: "No courses found"
                            }, void 0, false, {
                                fileName: "[project]/app/courses/page.tsx",
                                lineNumber: 530,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 mb-6",
                                children: "Try adjusting your search criteria or browse all available courses."
                            }, void 0, false, {
                                fileName: "[project]/app/courses/page.tsx",
                                lineNumber: 533,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setSelectedCategory("All");
                                    setSelectedLevel("All");
                                    setSearchTerm("");
                                    resetPagination();
                                },
                                className: "bg-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-all",
                                children: "View All Courses"
                            }, void 0, false, {
                                fileName: "[project]/app/courses/page.tsx",
                                lineNumber: 537,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/courses/page.tsx",
                        lineNumber: 514,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/courses/page.tsx",
                    lineNumber: 432,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/courses/page.tsx",
                lineNumber: 431,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: locationsRef,
                className: "py-24 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-5xl font-momo text-center text-secondary mb-8",
                            children: "Choose Your Study Destination"
                        }, void 0, false, {
                            fileName: "[project]/app/courses/page.tsx",
                            lineNumber: 556,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-center text-foreground/70 mb-16 max-w-3xl mx-auto",
                            children: "Each city offers unique opportunities for study, work, and life experience. Choose the destination that fits your goals and lifestyle."
                        }, void 0, false, {
                            fileName: "[project]/app/courses/page.tsx",
                            lineNumber: 559,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                            children: cities.map((city)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "location-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "aspect-video bg-linear-to-br from-primary/30 to-secondary/40 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: city.image,
                                                alt: city.name + " skyline",
                                                width: 400,
                                                height: 220,
                                                className: "object-cover w-full h-full",
                                                style: {
                                                    maxHeight: "220px",
                                                    width: "100%"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/courses/page.tsx",
                                                lineNumber: 572,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/courses/page.tsx",
                                            lineNumber: 571,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl font-bold text-secondary mb-2",
                                                    children: city.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/courses/page.tsx",
                                                    lineNumber: 583,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-foreground/70 mb-4",
                                                    children: city.description
                                                }, void 0, false, {
                                                    fileName: "[project]/app/courses/page.tsx",
                                                    lineNumber: 586,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: city.highlights.map((highlight, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center space-x-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-2 h-2 bg-primary rounded-full"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/courses/page.tsx",
                                                                    lineNumber: 591,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm text-foreground/70",
                                                                    children: highlight
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/courses/page.tsx",
                                                                    lineNumber: 592,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, idx, true, {
                                                            fileName: "[project]/app/courses/page.tsx",
                                                            lineNumber: 590,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/courses/page.tsx",
                                                    lineNumber: 588,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "mt-6 text-primary font-semibold hover:text-secondary transition-colors group-hover:translate-x-2 transform duration-300",
                                                    children: [
                                                        "Explore ",
                                                        city.name,
                                                        " →"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/courses/page.tsx",
                                                    lineNumber: 599,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/courses/page.tsx",
                                            lineNumber: 582,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, city.name, true, {
                                    fileName: "[project]/app/courses/page.tsx",
                                    lineNumber: 567,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/app/courses/page.tsx",
                            lineNumber: 565,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/courses/page.tsx",
                    lineNumber: 555,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/courses/page.tsx",
                lineNumber: 554,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/courses/page.tsx",
        lineNumber: 232,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CoursesPage, "5M7xD8RoexrLVFy8y4ayPRWwujI=");
_c = CoursesPage;
const __TURBOPACK__default__export__ = CoursesPage;
var _c;
__turbopack_context__.k.register(_c, "CoursesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/laptop.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Laptop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z",
            key: "1pdavp"
        }
    ],
    [
        "path",
        {
            d: "M20.054 15.987H3.946",
            key: "14rxg9"
        }
    ]
];
const Laptop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("laptop", __iconNode);
;
 //# sourceMappingURL=laptop.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/laptop.js [app-client] (ecmascript) <export default as Laptop>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Laptop",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/laptop.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/hospital.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Hospital
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 7v4",
            key: "xawao1"
        }
    ],
    [
        "path",
        {
            d: "M14 21v-3a2 2 0 0 0-4 0v3",
            key: "1rgiei"
        }
    ],
    [
        "path",
        {
            d: "M14 9h-4",
            key: "1w2s2s"
        }
    ],
    [
        "path",
        {
            d: "M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2",
            key: "1tthqt"
        }
    ],
    [
        "path",
        {
            d: "M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16",
            key: "dw4p4i"
        }
    ]
];
const Hospital = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("hospital", __iconNode);
;
 //# sourceMappingURL=hospital.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/hospital.js [app-client] (ecmascript) <export default as Hospital>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hospital",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hospital$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hospital$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hospital.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Settings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
            key: "1i5ecw"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ]
];
const Settings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("settings", __iconNode);
;
 //# sourceMappingURL=settings.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Settings",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chart-no-axes-column.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChartNoAxesColumn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 21v-6",
            key: "1hz6c0"
        }
    ],
    [
        "path",
        {
            d: "M12 21V3",
            key: "1lcnhd"
        }
    ],
    [
        "path",
        {
            d: "M19 21V9",
            key: "unv183"
        }
    ]
];
const ChartNoAxesColumn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("chart-no-axes-column", __iconNode);
;
 //# sourceMappingURL=chart-no-axes-column.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chart-no-axes-column.js [app-client] (ecmascript) <export default as BarChart2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BarChart2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-no-axes-column.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>GraduationCap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
            key: "j76jl0"
        }
    ],
    [
        "path",
        {
            d: "M22 10v6",
            key: "1lu8f3"
        }
    ],
    [
        "path",
        {
            d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5",
            key: "1r8lef"
        }
    ]
];
const GraduationCap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("graduation-cap", __iconNode);
;
 //# sourceMappingURL=graduation-cap.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GraduationCap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/coffee.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Coffee
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M10 2v2",
            key: "7u0qdc"
        }
    ],
    [
        "path",
        {
            d: "M14 2v2",
            key: "6buw04"
        }
    ],
    [
        "path",
        {
            d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",
            key: "pwadti"
        }
    ],
    [
        "path",
        {
            d: "M6 2v2",
            key: "colzsn"
        }
    ]
];
const Coffee = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("coffee", __iconNode);
;
 //# sourceMappingURL=coffee.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/coffee.js [app-client] (ecmascript) <export default as Coffee>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Coffee",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/coffee.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_a88eb245._.js.map