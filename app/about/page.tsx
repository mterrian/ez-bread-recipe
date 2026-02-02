import Header from "../components/header";

export default function About() {
  return (
    <div className="min-h-screen pb-8 sm:pb-20">
      <Header subtitle="About This Site" />
      <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 mt-8">
        <div className="card p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
            <p className="text-lg leading-relaxed">
              Easy Bread Recipe is built and maintained by Matt Terrian, a full
              stack developer living in Southfield, Michigan who specializes in
              Javascript and Golang microservice architecture. He is a father of
              one, aspiring intermediate level baker, and lover of music. Also
              pretty decent at Street Fighter III: Third Strike, depending on who
              you ask.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              This website serves to provide you with some recipes to get started
              with making your own bread at home, without making you look at a
              bunch of ads or scroll past a 14 paragraph essay about the summers I
              spent eating bread in Alpena. That's the last thing I want to read
              about when I'm hungry is another person's life story. This website
              does cost a little bit of money to maintain though, and I am between
              jobs, so if you find that you would like to support us financially
              please click this link.
            </p>
          </section>

          <section className="pt-4 border-t border-[var(--accent)] dark:border-gray-700">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              No fluff. Just flour.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
