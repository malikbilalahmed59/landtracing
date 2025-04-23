import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MoveRight } from 'lucide-react';


const Newsletter = () => {
    return (
        <div className="w-full  flex items-center gap-2 justify-center ">
            <div className="sm:w-[438px] w-[350px] mx-auto relative">
                <Input type="email" placeholder="Join our newsletter" className="border border-[#a4a4a6] text-[#a4a4a6] rounded-full  lg:py-[15px] sm:py-[12px] py-[8px] px-[20px] h-auto"/>
                <Button className="cursor-pointer !p-0 absolute top-1/2 -translate-y-1/2 right-[20px]"> <MoveRight/></Button>
            </div>
        </div>
    )
}

export default Newsletter