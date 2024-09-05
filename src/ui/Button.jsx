import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-block text-sm font-semibold tracking-wide uppercase transition-colors duration-200 bg-yellow-400 rounded-full text-stone-800 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    primary: base + ' px-6 py-3 md:px-6 md:py-4',
    secondary:
      'inline-block text-sm border-2 border-stone-300 font-semibold tracking-wide uppercase transition-colors duration-200  rounded-full text-stone-400 hover:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:bg-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed px-5 py-3.5 md:px-6 md:py-4 hover:text-stone-800 focus:text-stone-800',
    small: base + ' px-5 py-2 sm:px-6 sm:py-2.5 text-xs',
    round: base + ' px-4 py-2 sm:px-4 sm:py-2 text-sm',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
