
export interface Pronouns {
  subject: string;
  object: string;
  possessive: string;
  possessivePronoun: string;
  reflexive: string;

}

export interface PlayerObject{
  firstName: string;
  lastName: string;
  poronouns: Pronouns
}