import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(process.cwd(), ".env.local"),
});

async function test() {
  const { supabase } = await import("@/lib/supabase");

  console.log(
    "URL:",
    process.env.NEXT_PUBLIC_SUPABASE_URL
  );

  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .limit(1);

  if (error) {
    console.error(error);
    return;
  }

  console.log(data);
}

test();