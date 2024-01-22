// PlayerStatsTable.jsx
import React, { useContext, useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { CompleteStatTypes, GetStatName } from '../assets/constants/StatTypes';
import { CiStar } from "react-icons/ci";
import { AuthContext } from '../AuthContext';

const CompletePlayerStatsTable = ({ stat, completePlayerData }) => {
    const [isClicked, setIsClicked] = useState(false);
    const [clickedStates, setClickedStates] = useState(
      completePlayerData.map(() => ({ isClicked: false, first_name: null, last_name: null, team: null, player_id: null}))
    );
    const { isAuthenticated, isLoading, } = useContext(AuthContext);
    const [user, setUser] = useState(
      () => JSON.parse(localStorage.getItem('User')) || {}
    );

    useEffect(() => {
      const storedUser = JSON.parse(localStorage.getItem('User'));
      if (storedUser) {
        setUser(storedUser);
      }

      console.log("Stored User: ", storedUser)
    }, []);

    useEffect(() => {
      if(isAuthenticated) {
        console.log("user (player table): ", user)
      }
    },[user])

    const handleIconClick = (index, firstName, lastName, Team, playerId) => {
      const newClickedStates = [...clickedStates];
      newClickedStates[index].isClicked = !newClickedStates[index].isClicked;
      newClickedStates[index].player_id = playerId;
      setClickedStates(newClickedStates);
      
      console.log("newClickedStates[index].isClicked: ", newClickedStates[index].isClicked)
      if(!newClickedStates[index].isClicked === false || newClickedStates[index].isClicked === null) {
        console.log("ggtestUser: ", user)
          try {
            if(user) {
                fetch(`http://127.0.0.1:8000/api/watchlist`, {
                  method: 'POST', 
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    username: user?.username,
                    first_name: firstName,
                    last_name: lastName,
                    team: Team,
                    player_id: playerId
                  })
                })
                .then((response) => {
                  if (!response.ok) {
                    return response.text().then(text => {
                      throw new Error(`Network response was not ok. Status: ${response.status}, Message: ${text}`);
                    });
                  }
                  return response.json();
                })
                .then((data) => {
                  console.log("Response data:", data);
                })
            }
          } catch (error) {
            console.log(error)
          }
      } else {
        try {
          if(user) {
            console.log("gosgosgosgo username: ", user?.username) 
            fetch(`http://127.0.0.1:8000/api/watchlist?player_id=${playerId}&username=${user?.username}`, {
              method: 'DELETE',
            })
              .then((response) => {
                if (!response.ok) {
                  return response.text().then(text => {
                    throw new Error(`Network response was not ok. Status: ${response.status}, Message: ${text}`);
                  });
                }
                return response.json();
              })
              .then((data) => {
                console.log("Response data:", data);
              })
          }
        } catch (error) {
          console.log(error)
        }
      }

    };

    // console.log("stat11: ", stat)
    // console.log("completePlayerData11: ", completePlayerData)
  return (
    <div className="flex flex-col w-full h-full text-zinc-400 pt-8">
      <div className=" flex w-screen flex-col px-16 md:px-20 lg:px-24 xl:px-32 2xl:px-48 ">
        <div className="bg-zinc-900 outline outline-gray-500 outline-[.5px]">
          <h1 className="p-3 px-5 flex outline outline-[.5px] outline-gray-500">{stat} Per Game</h1>
          <Table className="table-auto bg-zinc-90 outline outline-[.5px] outline-gray-500">
            <TableBody className="">
              <TableRow className="flex outline outline-gray-500 outline-[.5px] hover:bg-zinc-800/60">
                {
                  CompleteStatTypes.map((tableColumnStat, index) => (
                    
                    index === 0 
                    ? (
                      <TableCell key={index} className="flex-1 w-[260px]"><p className="w-[260px]">{tableColumnStat.Stat}</p></TableCell>
                    )
                    : (
                        <TableCell key={index} className="flex-1">{tableColumnStat.Stat}</TableCell>
                      )
                        
                  ))
                }
                  </TableRow>
                  {completePlayerData.map((player, index) => (
                    <TableRow key={index} className="flex outline outline-gray-500 outline-[.5px] hover:bg-zinc-800/60">
                      {
                        CompleteStatTypes.map((statType, idx) => (
                          idx === 0 
                          ? (<TableCell className="flex-1" key={idx}>
                                <div className="flex gap-2 items-center font-medium w-[230px]">
                                <CiStar 
                                  size={18}
                                  onClick={() => handleIconClick(index, player?.PLAYER_NAME.split(' ')[0],player?.PLAYER_NAME.split(' ')[1], player?.TEAM_ABBREVIATION, player?.PLAYER_ID)}
                                  className={`cursor-pointer ${ clickedStates[index].isClicked ? 'text-yellow-400' : 'text-zinc-400'  }`} 
                                />
                                  <p>{player?.PLAYER_NAME} </p>
                                  <div className="flex flex-row gap-2 font-light text-sm  text-zinc-300">
                      
                                    <p>•</p> {player?.TEAM_ABBREVIATION}
                                  </div>
                                </div>
                              </TableCell>
                            )
                          : (<TableCell key={idx} className="flex-1">{statType.IsDecimal ? (player[statType.Stat] ? player[statType.Stat].toFixed(1) : '') : player[statType.Stat] || 'n/a'}</TableCell>)
                        ))
                      }
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      );
    };
    
export default CompletePlayerStatsTable;