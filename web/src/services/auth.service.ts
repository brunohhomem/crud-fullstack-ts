// import { SignInDto, SignUpDto } from "@/dto/auth.dto";
// import { authClient } from "@/lib/auth-client";

// export async function signInByEmail(dto: SignInDto) {
//   await authClient.signIn.email(
//     {
//       email: dto.email,
//       password: dto.password,
//     },
//     {
//       onSuccess: () => {
//         // router.push('/dashboard')
//       },
//       onError: (error) => {
//         console.error("Sign-in error:", error);
//       },
//     })
// }

// export async function signUpByEmail(dto: SignUpDto) {
//   await authClient.signUp.email(
//     {
//       name: dto.name,
//       email: dto.email,
//       password: dto.password,
//     },
//     {
//       onSuccess: () => {
//         // router.push('/dashboard')
//       },
//       onError: (error) => {
//         console.error("Sign-up error:", error);
//       },
//     })
// }

// export async function signOut() {
//   await authClient.signOut()
// }