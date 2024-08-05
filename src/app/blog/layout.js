//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "Blogs - Infinity Animations",
    description: "From impactful storytelling to technical mastery, our blog is your gateway to the art and innovation of video animation services.",
    //===== OG Tags =====
    openGraph: {
        title: 'Blogs - Infinity Animations',
        description: 'From impactful storytelling to technical mastery, our blog is your gateway to the art and innovation of video animation services.',
        url: '/blog',
        siteName: 'Infinity Animations',
        locale: 'en_US',
        type: 'website',
    },
    //===== Canonical =====
    alternates: { canonical: '/blog' },
}

export default function RootLayout({ children }) {
    return (children);
}