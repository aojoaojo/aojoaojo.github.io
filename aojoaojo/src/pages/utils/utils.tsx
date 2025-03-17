import { Layout } from "../../layout/layout";
import { BreakingBed } from "./components/breakingbed";
import { ConvertMoney } from "./components/convertMoney";


export function Utils() {

    return (
        <>
            <Layout currentPage={4} />
            <div className="container m-10 flex gap-4">
                <ConvertMoney />
                <BreakingBed />
            </div>
        </>
    );
}