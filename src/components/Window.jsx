import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWindowWidth } from '../features/windowSlicer/windowSlice';

const useWindowWidth = () => {
  const dispatch = useDispatch();
  const windowWidth = useSelector(store => store.windowSlice.windowWidth);

  useEffect(() => {
    const handleResize = () => {
      dispatch(setWindowWidth(window.innerWidth));
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  return windowWidth;
};

export default useWindowWidth;
