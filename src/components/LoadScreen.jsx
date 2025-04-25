export const LoadScreen = () => {

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center animate-pulse">
            
            <div className="w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 loading-shine"></div>

            <div className="mb-4">
                <img src="pamkin-portfolio/pumpkin.svg" alt="Pumpkin" width="300px" height="300px"/>
            </div>

            <p className="px-12 text-8xl text-yellow-500">
                PAMKIN
            </p>

        </div>
    );
};