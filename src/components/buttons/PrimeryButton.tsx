export default function PrimeryButton({ text }: { text: string }) {
  return (
    <button
      className="px-4 py-3 text-white font-bold bg-gradient-to-r from-[#2EAE7D] to-[#134834] hover:bg-gradient-to-l transition-all duration-300"
      style={{
        background: "linear-gradient(192deg, #2EAE7D 8.56%, #134834 91.44%)",
      }}
    >
      {text}
    </button>
  );
}
