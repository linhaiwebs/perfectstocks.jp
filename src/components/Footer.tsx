import { Link } from 'react-router-dom';
import { FileText, Mail, ExternalLink, Info, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-20 border-t-2 border-blue-500/30 mt-8">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-6">
        {/* Footer Links Section */}
        <div className="border-t-2 border-blue-500/20 pt-6">
          {/* Service Information - Top Section on Mobile */}
          <div className="mb-6">
            <h4 className="font-bold text-blue-200 mb-3 flex items-center gap-2 text-sm">
              <Info className="w-4 h-4" />
              サービス情報
            </h4>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs sm:text-sm text-blue-300">
              <span className="font-semibold">株式会社集英社インターナショナル</span>
              <span>AI株式診断サービス</span>
              <span>リアルタイム株価情報</span>
              <span>テクニカル分析</span>
              <span>銘柄スクリーニング</span>
              <span className="text-[11px] w-full mt-1">データ提供: 公開市場情報</span>
            </div>
          </div>

          {/* Two Column Layout for Mobile, Three Columns for Desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6">
            {/* Legal Documents */}
            <div>
              <h4 className="font-bold text-blue-200 mb-3 flex items-center gap-2 text-sm">
                <FileText className="w-4 h-4" />
                法的文書
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <Link
                    to="/terms"
                    className="text-orange-300 hover:text-orange-200 hover:underline flex items-center gap-1"
                  >
                    利用規約 <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-blue-300 hover:text-blue-200 hover:underline flex items-center gap-1"
                  >
                    プライバシーポリシー <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/disclaimer"
                    className="text-blue-300 hover:text-blue-200 hover:underline flex items-center gap-1"
                  >
                    免責事項 <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/specified-commercial-transaction-act"
                    className="text-blue-300 hover:text-blue-200 hover:underline flex items-center gap-1"
                  >
                    特定商取引法表記 <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-blue-200 mb-3 flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4" />
                お問い合わせ
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <Link
                    to="/contact"
                    className="text-blue-300 hover:text-blue-200 hover:underline flex items-center gap-1"
                  >
                    お問い合わせフォーム <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    className="text-blue-300 hover:text-blue-200 hover:underline flex items-center gap-1"
                  >
                    よくある質問 <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
                <li className="flex items-center gap-1 text-blue-200 mt-3">
                  <Phone className="w-3 h-3" />
                  <span>03-5211-2632</span>
                </li>
                <li className="text-blue-300">
                  support@perfectstocks.jp
                </li>
                <li className="text-blue-300 text-xs">
                  受付時間: 平日 9:00-18:00
                </li>
              </ul>
            </div>

            {/* Empty Third Column on Desktop (Service Info shown at top) */}
            <div className="hidden md:block"></div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-blue-500/20 pt-4 text-center">
            <p className="text-xs sm:text-sm text-blue-300 mb-2 font-medium">
              &copy; {currentYear} 株式会社集英社インターナショナル. All rights reserved.
            </p>
            <p className="text-[10px] sm:text-xs text-blue-400 leading-relaxed max-w-3xl mx-auto">
              当サイトで提供される情報は投資勧誘を目的としたものではありません。
              投資に関する最終決定は、利用者ご自身の判断でなさるようお願いいたします。
              掲載されている情報の正確性については万全を期しておりますが、その内容の正確性、安全性、有用性を保証するものではありません。
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
