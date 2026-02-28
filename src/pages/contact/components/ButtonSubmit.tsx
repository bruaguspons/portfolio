interface Props {
  children: React.ReactNode;
  loading?: boolean;
}

const ButtonSubmit = ({ children, loading }: Props): React.ReactNode => {

  return (
    <button
      type="submit"
      disabled={loading}
      className="w-full px-6 py-3 rounded-xl backdrop-blur-lg bg-linear-to-br from-blue-500/40 to-sky-500/40 border border-white/20 transition hover:scale-[1.03] active:scale-95 disabled:opacity-50 cursor-pointer"
    >
      {loading ? "Enviando..." : children}
    </button>
  );
};

export default ButtonSubmit;
