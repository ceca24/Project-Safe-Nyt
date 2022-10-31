/*
*    icons.js
*    icon array to load the markers based in the incident offense description of the crime 
*/


let icon_base = 'crimeometer-data-visualization-kit/static/icons/'
var icons = {
    'Shoplifting': {
        icon: icon_base + 'building.png',
    },
    'Theft From Building': {
        icon: icon_base + 'building.png',
    },
    'Theft From Coin-Operated Machine or Device': {
        icon: icon_base + 'building.png',
    },
    'Drug/Narcotic Violations': {
        icon: icon_base + 'drug.png'
    },
    'Drug Equipment Violations': {
        icon: icon_base + 'drug.png'
    },
    'Burglary/Breaking & Entering': {
        icon: icon_base + 'house.png'
    },
    'Trespass of Real Property': {
        icon: icon_base + 'house.png'
    },
    'Child Abuse/Aggravated/Physical abuse': {
        icon: icon_base + 'person.png'
    },
    'Child Abuse/Simple/Psychological abuse': {
        icon: icon_base + 'person.png'
    },
    'Child Abuse/Sexual abuse': {
        icon: icon_base + 'person.png'
    },
    'Child Abuse/Neglect': {
        icon: icon_base + 'person.png'
    },
    'Sexual Assault': {
        icon: icon_base + 'person.png'
    },
    'Sexual Battery': {
        icon: icon_base + 'person.png'
    },
    'Sex Offense/All Other': {
        icon: icon_base + 'person.png'
    },
    'Rape': {
        icon: icon_base + 'person.png'
    },
    'Sodomy': {
        icon: icon_base + 'person.png'
    },
    'Sexual Assault With An Object': {
        icon: icon_base + 'person.png'
    },
    'Fondling': {
        icon: icon_base + 'person.png'
    },
    'Incest': {
        icon: icon_base + 'person.png'
    },
    'Statutory Rape': {
        icon: icon_base + 'person.png'
    },
    'All Other Larceny': {
        icon: icon_base + 'person.png'
    },
    'Pocket-picking': {
        icon: icon_base + 'person.png'
    },
    'Purse-snatching': {
        icon: icon_base + 'person.png'
    },
    'Human Trafficking, Commercial Sex Acts': {
        icon: icon_base + 'person.png'
    },
    'Human Trafficking, Involuntary Servitude': {
        icon: icon_base + 'person.png'
    },
    'Kidnapping/Abduction': {
        icon: icon_base + 'person.png'
    },
    'Robbery': {
        icon: icon_base + 'person.png'
    },
    'Extortion/Blackmail': {
        icon: icon_base + 'person.png'
    },
    'Aggravated Assault': {
        icon: icon_base + 'person.png'
    },
    'Simple Assault': {
        icon: icon_base + 'person.png'
    },
    'Intimidation': {
        icon: icon_base + 'person.png'
    },
    'Bribery': {
        icon: icon_base + 'person.png'
    },
    'Weapon Law Violations': {
        icon: icon_base + 'person.png'
    },
    'Domestic Violence/Aggravated Assault': {
        icon: icon_base + 'person.png'
    },
    'Domestic Violence/Simple Assault': {
        icon: icon_base + 'person.png'
    },
    'Domestic Violence/Intimidation': {
        icon: icon_base + 'person.png'
    },
    'Human Trafficking/All Other': {
        icon: icon_base + 'person.png'
    },
    'Eldery Abuse/All Other': {
        icon: icon_base + 'person.png'
    },
    'Murder & Non-negligent Manslaughter': {
        icon: icon_base + 'homicide.png'
    },
    'Negligent Manslaughter': {
        icon: icon_base + 'homicide.png'
    },
    'Justifiable Homicide': {
        icon: icon_base + 'homicide.png'
    },
    'Suspicious Person': {
        icon: icon_base + 'suspicious.png'
    },
    'Suspicious Vehicle': {
        icon: icon_base + 'suspicious.png'
    },
    'Suspicious Activity/All Other': {
        icon: icon_base + 'suspicious.png'
    },
    'Disorderly Conduct': {
        icon: icon_base + 'vandalism.png'
    },
    'Destruction/Damage/Vandalism of Property': {
        icon: icon_base + 'vandalism.png'
    },
    'Motor Vehicle Theft': {
        icon: icon_base + 'vehicle.png'
    },
    'Theft From Motor Vehicle': {
        icon: icon_base + 'vehicle.png'
    },
    'Theft of Motor Vehicle Parts or Accessories': {
        icon: icon_base + 'vehicle.png'
    },
    'All Other Offenses': {
        icon: icon_base + 'other.png'
    },
    'Family Offenses/All Other': {
        icon: icon_base + 'other.png'
    },
    'Bad Checks': {
        icon: icon_base + 'other.png'
    },
    'Curfew/Loitering/Vagrancy Violations': {
        icon: icon_base + 'other.png'
    },
    'Driving Under the Influence': {
        icon: icon_base + 'other.png'
    },
    'Drunkenness': {
        icon: icon_base + 'other.png'
    },
    'Family Offenses, Nonviolent': {
        icon: icon_base + 'other.png'
    },
    'Liquor Law Violations': {
        icon: icon_base + 'other.png'
    },
    'Peeping Tom': {
        icon: icon_base + 'other.png'
    },
    'Stolen Property Offenses': {
        icon: icon_base + 'other.png'
    },
    'Pornography/Obscene Material': {
        icon: icon_base + 'other.png'
    },
    'Prostitution': {
        icon: icon_base + 'other.png'
    },
    'Assisting or Promoting Prostitution': {
        icon: icon_base + 'other.png'
    },
    'Purchasing Prostitution': {
        icon: icon_base + 'other.png'
    },
    'Betting/Wagering': {
        icon: icon_base + 'other.png'
    },
    'Operating/Promoting/Assisting Gambling': {
        icon: icon_base + 'other.png'
    },
    'Gambling Equipment Violations': {
        icon: icon_base + 'other.png'
    },
    'Sports Tampering': {
        icon: icon_base + 'other.png'
    },
    'Embezzlement': {
        icon: icon_base + 'other.png'
    },
    'False Pretenses/Swindle/Confidence Game': {
        icon: icon_base + 'other.png'
    },
    'Credit Card/Automated Teller Machine Fraud': {
        icon: icon_base + 'other.png'
    },
    'Impersonation': {
        icon: icon_base + 'other.png'
    },
    'Welfare Fraud': {
        icon: icon_base + 'other.png'
    },
    'Wire Fraud': {
        icon: icon_base + 'other.png'
    },
    'Identity Theft': {
        icon: icon_base + 'other.png'
    },
    'Hacking/Computer Invasion': {
        icon: icon_base + 'other.png'
    },
    'Counterfeiting/Forgery': {
        icon: icon_base + 'other.png'
    },
    'Animal Cruelty': {
        icon: icon_base + 'other.png'
    },
    'Arson': {
        icon: icon_base + 'other.png'
    }  
};