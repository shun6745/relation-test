"use client";

// next-auth の signOut はクライアントサイドでのみ動作するため use client を付けている。

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

// next-auth が提供する signOut 関数を import する。
import { signOut } from "next-auth/react";
// material-ui が提供する Button を import する。
import Button from "@mui/material/Button";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				{/* Button を配置し onClick イベント(ボタンをクリックしたとき)に signOut 関数を実行するようにする。 */}
				<Button onClick={() => signOut()} variant="contained" color="secondary">
					Sign out
				</Button>
				<p>
					Get started by editing&nbsp;
					<code className={styles.code}>app/page.tsx</code>
				</p>
				<div>
					<ul>
						<li>
							<Link href="file-uploader" className="underline">
								File Uploader
							</Link>
						</li>
						<li>
							<Link href="qr-code-reader" className="underline">
								QR Code Reader
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<a
						href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer">
						By{" "}
						<Image
							src="/vercel.svg"
							alt="Vercel Logo"
							className={styles.vercelLogo}
							width={100}
							height={24}
							priority
						/>
					</a>
				</div>
			</div>

			<div className={styles.center}>
				<Image
					className={styles.logo}
					src="/next.svg"
					alt="Next.js Logo"
					width={180}
					height={37}
					priority
				/>
			</div>

			<div className={styles.grid}>
				<a
					href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer">
					<h2>
						Docs <span>-&gt;</span>
					</h2>
					<p>Find in-depth information about Next.js features and API.</p>
				</a>

				<a
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer">
					<h2>
						Learn <span>-&gt;</span>
					</h2>
					<p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
				</a>

				<a
					href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer">
					<h2>
						Templates <span>-&gt;</span>
					</h2>
					<p>Explore the Next.js 13 playground.</p>
				</a>

				<a
					href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer">
					<h2>
						Deploy <span>-&gt;</span>
					</h2>
					<p>
						Instantly deploy your Next.js site to a shareable URL with Vercel.
					</p>
				</a>
			</div>
		</main>
	);
}
