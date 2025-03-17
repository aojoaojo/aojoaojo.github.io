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
import { useEffect, useState } from "react";

interface Types {
    simbolo: string;
    nome: string;
    tipo_moeda: 'A' | 'B';
}

export function ConvertMoney() {
    const [moneyTypes, setMoneyTypes] = useState<Types[]>([]);
    const [moneyCotation, setMoneyCotation] = useState<number>(0);
    const [moneyTypeSelected, setMoneyTypeSelected] = useState<string>('');
    const [moneyConverted, setMoneyConverted] = useState<number>(0);

    useEffect(() => {
        axios.get('https://brasilapi.com.br/api/cambio/v1/moedas')
            .then(response => {
                setMoneyTypes(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the money types!", error);
            });
    }
        , []);

    function catchMoneyTypeCotation(moeda_origem: string, date_of_yesterday: string) {
        axios.get(`https://brasilapi.com.br/api/cambio/v1/cotacao/${moeda_origem}/${date_of_yesterday}`)
            .then(response => {
                setMoneyCotation(response.data.cotacoes[4].cotacao_compra);
            })
            .catch(error => {
                console.error("There was an error fetching the money types!", error);
            });
    }

    return (
        <Card className="w-[350px] bg-gray-400 hover:scale-105 transition">
            <CardHeader>
                <CardTitle className='text-white mb-4'>Convert to BRL</CardTitle>
                {/* <img src={bed} alt="" /> */}
                <CardDescription className='text-white'>
                    Convert other currencies to BRL
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form action={() => {
                    const moneyTypeSelect = document.getElementById("moneyType") as HTMLSelectElement;
                    const selectedMoneyType = moneyTypeSelect.value;
                    setMoneyTypeSelected(selectedMoneyType);
                    const dateOfYesterday = new Date();
                    dateOfYesterday.setDate(dateOfYesterday.getDate() - 1);
                    const formattedDate = dateOfYesterday.toISOString().split('T')[0];
                    catchMoneyTypeCotation(selectedMoneyType, formattedDate);
                    const valueToBeConverted = document.getElementById("moneyValue") as HTMLInputElement;
                    setMoneyConverted(Number(valueToBeConverted.value));
                }}>
                    <select
                        name="moneyType"
                        id="moneyType"
                        className="bg-gray-300 p-2 rounded-md text-black"
                    >
                        <option value="0">Selecione a moeda</option>
                        {moneyTypes.map((type, index) => (
                            <option key={index} value={type.simbolo}>{type.nome}</option>
                        ))}
                    </select>
                    <input
                        type="number"
                        id="moneyValue"
                        placeholder="Digite o valor da moeda a ser convertida"
                        className="my-4 w-full bg-gray-300 p-2 rounded-md text-black"
                    />
                    <Button className="bg-gray-600" type="submit"
                    >
                        Convert
                    </Button>
                </form>
                {
                    moneyCotation > 0 &&
                    <p className="text-black m-3 font-bold">
                        Current {moneyTypeSelected} rate: {moneyCotation} Reais
                    </p>
                }
                {
                    moneyConverted > 0 &&
                    <p className="text-white font-bold text-2xl text-center">
                        {moneyConverted} {moneyTypeSelected} : {(moneyConverted * moneyCotation).toFixed(2)} Reais
                    </p>
                }
            </CardContent>
        </Card >
    );
}