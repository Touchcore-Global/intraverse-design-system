import problemImage from "@/assets/problem-section-image.jpg";

export const ProblemStatement = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 pl-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Explainer text */}
          <div>
            <h2 className="text-left mb-6">
              Running a Travel Agency Shouldn't Feel This Hard
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-base md:text-lg">
              You're juggling GDS terminals for flights, checking NDC portals for better fares, calling
              consolidators for group rates, logging into separate platforms for hotels, and sourcing tour
              packages from suppliers one by one.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 text-base md:text-lg">
              Customer records live on spreadsheets, payments are chased
              on WhatsApp, and you're losing customers to agencies with better websites. Your margins are
              tight, your team is stretched, and every price change costs you time and money.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              You didn't start your agency to fight with ten different systems. You started it to build
              something. Intraverse brings flights, hotels, and tours from leading global suppliers into one platform — so you can get back to selling.
            </p>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={problemImage}
              alt="Intraverse travel agency booking platform dashboard"
              className="rounded-2xl shadow-lg w-full max-w-lg"
              loading="lazy"
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
