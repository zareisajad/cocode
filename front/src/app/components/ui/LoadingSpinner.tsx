interface Props {
  color?: string;
}

export function LoadingSpinner({ color = "" }: Props) {
  return (
    <span className={`inline-block w-5 h-5 border-4 border-${color ? color : 'white'} border-t-transparent rounded-full animate-spin`} />
  );
}
