import valter from '@/assets/valter-branco.jpg';
import bed from '@/assets/breakbed.png';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import axios from "axios";
import { useState } from "react";

export function BreakingBed() {
    const [quote, setQuote] = useState<String>(() => {
        getQuote();
        return 'Loading...';
    });

    async function getQuote() {
        try {
            const response = await axios.get('https://api.breakingbadquotes.xyz/v1/quotes');
            setQuote(response.data[0].quote);
        } catch (error) {
            console.error(error);
        }
    }

    async function breakBed() {
        await getQuote();
    }

    return (
        <Card className="w-[350px] bg-gray-400 hover:scale-105 transition">
            <CardHeader>
                <CardTitle className='text-white'>Breaking the bed</CardTitle>
                <img src={bed} alt="" />
                <CardDescription className='text-white'>Click bellow to break the bed</CardDescription>
            </CardHeader>
            <CardContent>
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button className='hover:bg-white hover:text-black hover:cursor-pointer'>Click here</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>{quote}</AlertDialogTitle>
                            <AlertDialogDescription>
                                <img src={valter} alt="Valter Branco" />
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogAction
                                onClick={breakBed}
                                className='hover:bg-white hover:text-black hover:cursor-pointer border-2'>
                                Close
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </CardContent>
        </Card>
    );
}