"use client";

import { Button } from "@/components/ui/button";
import { useLoadEditorTheme } from "@/hooks/use-editor-theme";
import { Theme } from "@/types";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";

export default function TestPage() {
    const [content, setContent] = useState(`package com.github.libretube.api

import com.github.libretube.api.obj.DeArrowBody
import com.github.libretube.api.obj.PipedInstance
import com.github.libretube.api.obj.SubmitSegmentResponse
import com.github.libretube.api.obj.VoteInfo
import com.github.libretube.obj.update.UpdateInfo
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.POST
import retrofit2.http.Query
import retrofit2.http.Url

private const val GITHUB_API_URL = "https://api.github.com/repos/libre-tube/LibreTube/releases/latest"
private const val SB_API_URL = "https://sponsor.ajay.app"
private const val RYD_API_URL = "https://returnyoutubedislikeapi.com"   

interface ExternalApi {
    // only for fetching servers list
    @GET
    suspend fun getInstances(@Url url: String): List<PipedInstance>

    // fetch latest version info
    @GET(GITHUB_API_URL)
    suspend fun getLatestRelease(): UpdateInfo

    @GET("$RYD_API_URL/votes")
    suspend fun getVotes(@Query("videoId") videoId: String): VoteInfo

    @POST("$SB_API_URL/api/skipSegments")
    suspend fun submitSegment(
        @Query("videoID") videoId: String,
        @Query("userID") userID: String,
        @Query("userAgent") userAgent: String,
        @Query("startTime") startTime: Float,
        @Query("endTime") endTime: Float,
        @Query("category") category: String,
        @Query("duration") duration: Float? = null,
        @Query("description") description: String = ""
    ): List<SubmitSegmentResponse>

    @POST("$SB_API_URL/api/branding")
    suspend fun submitDeArrow(@Body body: DeArrowBody)

    /**
     * @param score: 0 for downvote, 1 for upvote, 20 for undoing previous vote (if existent)
     */
    @POST("$SB_API_URL/api/voteOnSponsorTime")
    suspend fun voteOnSponsorTime(
        @Query("UUID") uuid: String,
        @Query("userID") userID: String,
        @Query("type") score: Int
    )
}
`);

    const [theme, setTheme] = useState<Theme>(Theme.Default);

    const { loaded, themeName } = useLoadEditorTheme(theme);

    return (
        <div>
            {/*  Default = "vs-dark",
    Dracula = "Dracula",
    NightOwl = "Night Owl",
    Github = "GitHub Dark", */}
            <div className="flex gap-2">
                <Button onClick={() => setTheme(Theme.Default)}>Default</Button>
                <Button onClick={() => setTheme(Theme.Dracula)}>Dracula</Button>
                <Button onClick={() => setTheme(Theme.NightOwl)}>
                    Night Owl
                </Button>
                <Button onClick={() => setTheme(Theme.Github)}>
                    GitHub Dark
                </Button>
                <Button onClick={() => setTheme(Theme.Cobalt)}>Cobalt</Button>
            </div>
            <Editor
                width="100%"
                height="calc(100vh - 154px)"
                value={content}
                theme={loaded ? themeName : "vs-dark"}
                language="kotlin"
            />
        </div>
    );
}
