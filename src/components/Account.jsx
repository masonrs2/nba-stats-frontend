import React, { useEffect, useState } from 'react'
import { getTeamLogo } from '../assets/constants/TeamLogos';
import { WatchlistTableHeaders } from '../assets/constants/WatchlistTable';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

const Account = () => {
    const { isAuthenticated, isLoading } = useContext(AuthContext);
    const [ watchlist, setWatchlist ] = useState([])
    const [user, setUser] = useState(
        () => JSON.parse(localStorage.getItem('User')) || {}
      );

    const fetchWatchlist = () => {
        console.log("user (account): ", user)
        try {
            fetch(`https://nba-stats-backend-production.up.railway.app/api/watchlist?username=${user?.username}`, {
                method: 'GET',
            })
                .then(response => {
                    if(!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(fetchedData => {
                    setWatchlist(fetchedData);
                
                })
        } catch (error) { 

        }
    }

    useEffect(() => {
        fetchWatchlist()
    }, [])

    useEffect(() => {
        console.log("watchlist: ", watchlist)
    }, [watchlist])

  return (
    <div className="">
        <div className="flex flex-col pt-8 px-16 md:px-20 lg:px-24 2xl:px-32">
            <h1 className="text-gray-400 font-semibold tracking-wide text-xl" >{user?.first_name}'s' Watchlist</h1>
            <hr className="mt-2" />

            <Table>
                <TableHeader>
                    <TableRow>
                        {
                            WatchlistTableHeaders.map((header, index) => (
                                <TableHead key={index}>{header}</TableHead>
                            ))
                        }
                    </TableRow>
                </TableHeader>

                <TableBody>  
                    {
                        watchlist.map((player, index) => (
                            <TableRow key={index}>
                                <TableCell>{player?.first_name} {player?.last_name}</TableCell>
                                <TableCell>
                                    <div className="flex flex-row gap-1 items-center" >
                                        <img 
                                            src={getTeamLogo(player?.team)} 
                                            width={19}
                                            height={20}
                                        /> 
                                        {player?.team}
                                    </div>
                                </TableCell>
                                <TableCell>27</TableCell>
                                <TableCell>{player?.player_id}</TableCell>
                            </TableRow>     
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    </div>
  )
}

export default Account