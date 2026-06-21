import supabase from "./supabase"

export async function getProblems() {
    const { data, error } = await supabase
    .from('problems')
    .select();
    if (error) throw error;
    return data;
}