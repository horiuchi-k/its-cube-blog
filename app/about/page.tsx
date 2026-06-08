import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "アバウト | IT Scube",
  description: "自己紹介",
};

const AboutPage = () => {
  return (
    <>
      <div>
        <h1>自己紹介</h1>
        <div>
          <ul>
            <li>ITエンジニア歴：25年</li>
            <li>
              過去大手SIerにてシステムエンジニアとして13年間在籍し、企業のITシステム構築・保守に携わってきました。その後、独立して、中小企業や起業家のIT導入・運用を支援してきました。現在はITエンジニアとして企業のWebアプリ開発を担当しています。
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
