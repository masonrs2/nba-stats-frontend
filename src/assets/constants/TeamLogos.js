
import celticsLogo from '/images/celtics-logo.png';
import netsLogo from '/images/nets-logo.png';
import hornetsLogo from '/images/hornets-logo.png';
import bullsLogo from '/images/bulls-logo.png';
import cavaliersLogo from '/images/cavs-logo.png';
import mavericksLogo from '/images/mavs-logo.png';
import nuggetsLogo from '/images/nuggets-logo.png';
import pistonsLogo from '/images/pistons-logo.png';
import warriorsLogo from '/images/warriors-logo.png';
import rocketsLogo from '/images/rockets-logo.png';
import pacersLogo from '/images/pacers-logo.png';
import clippersLogo from '/images/clippers-logo.png';
import lakersLogo from '/images/lakers-logo.png';
import grizzliesLogo from '/images/grizzlies-logo.png';
import heatLogo from '/images/heat-logo.gif';
import bucksLogo from '/images/bucks-logo.png';
import timberwolvesLogo from '/images/wolves-logo.png';
import pelicansLogo from '/images/pelicans-logo.png';
import knicksLogo from '/images/knicks-logo.png';
import thunderLogo from '/images/thunder-logo.png';
import magicLogo from '/images/magic-logo.png';
import sixersLogo from '/images/sixers-logo.png';
import sunsLogo from '/images/suns-logo.png';
import blazersLogo from '/images/blazers-logo.png';
import kingsLogo from '/images/kings-logo.png';
import spursLogo from '/images/spurs-logo.png';
import raptorsLogo from '/images/raptors-logo.png';
import jazzLogo from '/images/jazz-logo.gif';
import wizardsLogo from '/images/wizards-logo.png';


export const TeamLogos = [
    {
        "Name": "Atlanta Hawks",
        "Abbreviation": "ATL",
        "Logo": "/images/hawks-logo.png"
    },
    {
        "Name": "Boston Celtics",
        "Abbreviation": "BOS",
        "Logo": "/images/celtics-logo.png"
    },
    {
        "Name": "Brooklyn Nets",
        "Abbreviation": "BKN",
        "Logo": "/images/nets-logo.png"
    },
    {
        "Name": "Charlotte Hornets",
        "Abbreviation": "CHA",
        "Logo": "/images/hornets-logo.png"
    },
    {
        "Name": "Chicago Bulls",
        "Abbreviation": "CHI",
        "Logo": "/images/bulls-logo.png"
    },
    {
        "Name": "Cleveland Cavaliers",
        "Abbreviation": "CLE",
        "Logo": "/images/cavs-logo.png"
    },
    {
        "Name": "Dallas Mavericks",
        "Abbreviation": "DAL",
        "Logo": "/images/mavs-logo.png"
    },
    {
        "Name": "Denver Nuggets",
        "Abbreviation": "DEN",
        "Logo": "/images/nuggets-logo.png"
    },
    {
        "Name": "Detroit Pistons",
        "Abbreviation": "DET",
        "Logo": "/images/pistons-logo.png"
    },
    {
        "Name": "Golden State Warriors",
        "Abbreviation": "GSW",
        "Logo": "/images/warriors-logo.png"
    },
    {
        "Name": "Houston Rockets",
        "Abbreviation": "HOU",
        "Logo": "/images/rockets-logo.png"
    },
    {
        "Name": "Indiana Pacers",
        "Abbreviation": "IND",
        "Logo": "/images/pacers-logo.png"
    },
    {
        "Name": "LA Clippers",
        "Abbreviation": "LAC",
        "Logo": "/images/clippers-logo.png"
    },
    {
        "Name": "Los Angeles Lakers",
        "Abbreviation": "LAL",
        "Logo": "/images/lakers-logo.png"
    },
    {
        "Name": "Memphis Grizzlies",
        "Abbreviation": "MEM",
        "Logo": "/images/grizzlies-logo.png"
    },
    {
        "Name": "Miami Heat",
        "Abbreviation": "MIA",
        "Logo": "/images/heat-logo.gif"
    },
    {
        "Name": "Milwaukee Bucks",
        "Abbreviation": "MIL",
        "Logo": "/images/bucks-logo.png"
    },
    {
        "Name": "Minnesota Timberwolves",
        "Abbreviation": "MIN",
        "Logo": "/images/wolves-logo.png"
    },
    {
        "Name": "New Orleans Pelicans",
        "Abbreviation": "NOP",
        "Logo": "/images/pelicans-logo.png"
    },
    {
        "Name": "New York Knicks",
        "Abbreviation": "NYK",
        "Logo": "/images/knicks-logo.png"
    },
    {
        "Name": "Oklahoma City Thunder",
        "Abbreviation": "OKC",
        "Logo": "/images/thunder-logo.png"
    },
    {
        "Name": "Orlando Magic",
        "Abbreviation": "ORL",
        "Logo": "/images/magic-logo.png"
    },
    {
        "Name": "Philadelphia 76ers",
        "Abbreviation": "PHI",
        "Logo": "/images/sixers-logo.png"
    },
    {
        "Name": "Phoenix Suns",
        "Abbreviation": "PHX",
        "Logo": "/images/suns-logo.png"
    },
    {
        "Name": "Portland Trail Blazers",
        "Abbreviation": "POR",
        "Logo": "/images/blazers-logo.png"
    },
    {
        "Name": "Sacramento Kings",
        "Abbreviation": "SAC",
        "Logo": "/images/kings-logo.png"
    },
    {
        "Name": "San Antonio Spurs",
        "Abbreviation": "SAS",
        "Logo": "/images/spurs-logo.png"
    },
    {
        "Name": "Toronto Raptors",
        "Abbreviation": "TOR",
        "Logo": "/images/raptors-logo.png"
    },
    {
        "Name": "Utah Jazz",
        "Abbreviation": "UTA",
        "Logo": "/images/jazz-logo.gif"
    },
    {
        "Name": "Washington Wizards",
        "Abbreviation": "WAS",
        "Logo": "/images/wizards-logo.png"
    }
]

export function getTeamLogo(teamAbbreviation) {
    for (let i = 0; i < TeamLogos.length; i++) {
        if (TeamLogos[i].Abbreviation == teamAbbreviation) {
            return TeamLogos[i].Logo;
        }
    }
}