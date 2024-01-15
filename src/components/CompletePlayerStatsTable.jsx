// PlayerStatsTable.jsx
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { CompleteStatTypes, GetStatName } from '../assets/constants/StatTypes';
import { CiStar } from "react-icons/ci";

const CompletePlayerStatsTable = ({ stat, completePlayerData }) => {
    const [isClicked, setIsClicked] = useState(false);
    const [clickedStates, setClickedStates] = useState(Array(completePlayerData.length).fill(false));

    const handleIconClick = (index) => {
      const newClickedStates = [...clickedStates];
      newClickedStates[index] = !newClickedStates[index];
      setClickedStates(newClickedStates);

      // try {
      //   fetch(`http://127.0.0.1:8000/watchlist`, {
      //     method: 'POST', 
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({
      //       username: "test",
      //       first_name: "Lebron",
      //       last_name: "James",
      //       team: "lakers",
      //       player_id: 123
      //     })
      //   })
      //   .then((response) => {
      //     if (!response.ok) {
      //       return response.text().then(text => {
      //         throw new Error(`Network response was not ok. Status: ${response.status}, Message: ${text}`);
      //       });
      //     }
      //     return response.json();
      //   })
      //   .then((data) => {
      //     console.log("Response data:", data);
      //   })
      // } catch (error) {
      //   console.log(error)
      // }

    };


    console.log("stat11: ", stat)
    console.log("completePlayerData11: ", completePlayerData)
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
                          ? (<TableCell className="flex-1">
                                <div className="flex gap-2 items-center font-medium w-[230px]">
                                <CiStar 
                                  size={18}
                                  onClick={() => handleIconClick(index)}
                                  className={`cursor-pointer ${ clickedStates[index] ? 'text-yellow-400' : 'text-zinc-400'  }`} 
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