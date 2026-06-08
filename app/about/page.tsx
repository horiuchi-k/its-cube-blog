import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "自己紹介 | 50代ITエンジニアのAI実践記",
  description: "50代ITエンジニアKの自己紹介",
};

const AboutPage = () => {
  return (
    <div>
      <h1>自己紹介</h1>
      <p>はじめまして、50代ITエンジニアKです。</p>
      <ul>
        <li>ITエンジニア歴20年以上</li>
        <li>大手IT企業でのシステム開発・設計を経験</li>
        <li>複数の企業立ち上げ・経営経験あり</li>
        <li>現在は中小企業・個人起業家向けのAI導入・活用支援に取り組んでいる</li>
      </ul>
      <p>
        このブログでは、AIを仕事や経営に活かすための実践的な情報を発信しています。
      </p>
    </div>
  );
};

export default AboutPage;
