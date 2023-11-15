import NewsletterSignup from "../components/NewsletterSignup";
import PageContent from "../components/PageContent";

export const action = async ({ request }) => {
  const data = await request.formData();
  const email = data.get("email");

  console.log(email);
  return { message: "Signup successful!" };
};

function NewsletterPage() {
  return (
    <PageContent title="Join our awesome newsletter!">
      <NewsletterSignup />
    </PageContent>
  );
}

export default NewsletterPage;
