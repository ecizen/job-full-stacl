import Container from "@/app/(routes)/components/atoms/container"
import exp from "constants"
import { ArrowLeft, ArrowRight } from "lucide-react";
import { GridLikeJob } from "../components/organisms/like-job";

const LikeJobPage =() => {
    return (
        <Container>
            <main className="  bg-[#eef2f7] lg:px-12 px-4 lg:py-8 py-4">
                <section>
                    <GridLikeJob/>
                </section>
            </main>
        </Container>
    )
}

export default LikeJobPage;