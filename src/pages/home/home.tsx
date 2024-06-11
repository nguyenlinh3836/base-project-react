import {Button} from "antd";

export default function home() {
    return (
        <div className="w-full h-full">
            <div className="flex justify-center items-center h-full">
                <div className="flex h-[400px] m-auto items-center justify-center">
                    <Button type="primary">Primary Button</Button>
                </div>
            </div>
            <h1 className="text-4xl">Home</h1>
        </div>
    );
}

