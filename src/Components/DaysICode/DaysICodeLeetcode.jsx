import React from "react";
// import { LeetCode } from "leetcode-query";
import { LeetCode, Credential } from "leetcode-query";

// const credential = new Credential();
// await credential.init("YOUR-LEETCODE-SESSION-COOKIE");

// const leetcode = new LeetCode(credential);

const getUserData = async () => {
  //   const leetcode = new LeetCode();
  //   const user = await leetcode.user("akansh29");
  //   console.log(await leetcode.submissions(100, 0));
  //   const data = user.recentSubmissionList();
  //   console.log(data);
  const credential = new Credential();
  await credential.init("SESSION");
  const leetcode = new LeetCode(credential);
  const submissions = await leetcode.submissions({ limit: 100, offset: 0 });
  console.log({ submissions });
};

function DaysICode() {
  //   console.log({ user });
  getUserData();
  return <></>;
}

export default DaysICode;
