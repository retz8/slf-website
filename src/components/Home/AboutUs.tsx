// this page is SSG (not editable in sanity studio

type Props = {
  text: string;
};

export default function AboutUs({ text }: Props) {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-3xl md:text-4xl text-[#E27073] font-extrabold ">
        About Us
      </p>
      <p className="mt-8 mb-2 text-xl text-dark-brown text-center">{text}</p>
    </div>
  );
}
