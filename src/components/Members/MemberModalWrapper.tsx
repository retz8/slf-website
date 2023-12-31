type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

export default function MemberModalWrapper({ onClose, children }: Props) {
  return (
    <section
      className="fixed top-0 left-0 flex flex-col justify-center items-center w-full h-full z-50 backdrop-blur-md"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          // when user clicks outside of the modal
          onClose();
        }
      }}
    >
      {children}
    </section>
  );
}
