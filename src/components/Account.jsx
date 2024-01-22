import React, { useEffect, useState } from 'react'
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
    const [user, setUser] = useState(
        () => JSON.parse(localStorage.getItem('User')) || {}
      );

    const fetchWatchlist = () => {
        console.log("user (account): ", user)
        try {

        } catch (error) { 

        }
    }

    useEffect(() => {
        fetchWatchlist()
    }, [])

//   const {  }
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
                        
                    }
                </TableBody>
            </Table>
        </div>
    </div>
  )
}

export default Account