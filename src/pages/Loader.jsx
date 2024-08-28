import { ScaleLoader } from 'react-spinners';

const Loader = () => {
    return (
       <div className="flex flex-col justify-center items-center min-h-[calc(100vh-124px)]">
          <ScaleLoader size={100} color="#3890d8" />
       </div>
    );
};

export default Loader;