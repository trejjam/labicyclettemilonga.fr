'use client'

import {Button} from "theme-ui";
import NoSSR from "@/components/common/NoSSR.tsx";
import {useAcceptCookies} from "@/lib/hooks/useAcceptCookies.tsx";
import dynamic from "next/dynamic";

const FeatureBar = dynamic(() => import('@/components/common/FeatureBar.tsx'), {
    ssr: false,
})

export default function Home() {
    const {acceptedCookies, onAcceptCookies} = useAcceptCookies()

    return (
        <>
            <main className="flex">
                Work in progress
            </main>
            <NoSSR>
                <FeatureBar
                    title="This site uses cookies to improve your experience. By clicking, you agree to our Privacy Policy."
                    hide={acceptedCookies}
                    action={
                        <Button onClick={() => onAcceptCookies()}>Accept cookies</Button>
                    }
                >
                </FeatureBar>
            </NoSSR>
        </>
    );
}
