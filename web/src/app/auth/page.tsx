
import SignIn from "./components/sign-in";
import SignUp from "./components/sign-up";

export default function AuthPage() {

  return (
    <div>
      <h1>Auth Page</h1>
      <div className="flex gap-5">

        <SignIn />
        <SignUp />

      </div>
    </div>
  )
}