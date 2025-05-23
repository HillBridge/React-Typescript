import { useContext } from 'react';
import { GlobalContext } from '../../context/global';
import { ThemeContext } from '../../context/theme';

const useAddToCart = () => {
  // 自定义hooks 就是公共逻辑的封装
  // 自定义hooks 必须以use开头
  // 自定义hooks 可以调用其他hooks
  // 相比于hoc 自定义hooks 更灵活 更符合react的函数式编程思想
  const { theme } = useContext(ThemeContext);
  const { username, setShoppingCart } = useContext(GlobalContext);

  const addShoppingCart = (item: { id: number; name: string }) => {
    setShoppingCart(item);
  };
  return { theme, username, addShoppingCart };
};

export default useAddToCart;
