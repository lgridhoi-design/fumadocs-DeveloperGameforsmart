# Graph Report - D:\UBIG3\fumadocs-gfsTutorial  (2026-09-25)

## Corpus Check
- 124 files · ~51,217 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 457 nodes · 590 edges · 39 communities (26 shown, 13 thin omitted)
- Extraction: 89% EXTRACTED · 11% INFERRED · 0% AMBIGUOUS · INFERRED: 62 edges (avg confidence: 0.91)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Auth and Project Setup
- Results and Waiting Room
- Fumadocs Documentation Platform
- Player Gameplay and Room Joining
- Quiz Discovery Interface
- Development Package Configuration
- TypeScript Configuration
- Backend Database and Deployment
- Memory Game Platform Architecture
- Host Leaderboard and Results
- Runtime Dependencies
- Home and Host Lobby
- Quiz Settings Flow
- Tailwind Pixel Styling
- Responsive Question Text Layout
- Whale Illustration Asset
- Landing Page Implementation
- Component Organization Policy
- Sitting Cat Illustration
- Jellyfish Line Art
- Sea Turtle Pixel Art
- Root Application Layout
- Question Answer Shuffling
- Next.js MDX Configuration
- Cow Pixel Art
- Koala Memory Card
- Penguin Mascot Asset
- Fumadocs Content Source
- Quiz Search Flow
- Favorites and Quiz Selection
- PostCSS Configuration
- MDX Components Hook
- Quiz Image URL Detection
- My Quizzes Fetching
- Profile and Favorites Fetching
- Crab Image Asset
- Fox Image Asset
- Parrot Image Asset

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 17 edges
2. `SelectQuizContent` - 17 edges
3. `ResultPageContent` - 13 edges
4. `Supabase & Environment` - 13 edges
5. `LeaderboardHostPage` - 10 edges
6. `MemoryChallengePage` - 10 edges
7. `QuizPage` - 10 edges
8. `QuizSettingsPageContent` - 10 edges
9. `Memory Game Platform` - 10 edges
10. `Next.js 14 Project Scaffold` - 10 edges

## Surprising Connections (you probably didn't know these)
- `Layout()` --calls--> `baseOptions()`  [EXTRACTED]
  app/(home)/layout.tsx → lib/layout.shared.tsx
- `generateMetadata()` --calls--> `getPageImageUrl()`  [EXTRACTED]
  app/docs/[[...slug]]/page.tsx → lib/shared.ts
- `Layout()` --calls--> `baseOptions()`  [EXTRACTED]
  app/docs/layout.tsx → lib/layout.shared.tsx
- `generateStaticParams()` --calls--> `getPageMarkdownUrl()`  [EXTRACTED]
  app/llms.mdx/docs/[[...slug]]/route.ts → lib/shared.ts
- `generateStaticParams()` --calls--> `getPageImageUrl()`  [EXTRACTED]
  app/og/docs/[...slug]/route.tsx → lib/shared.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Responsive Leaderboard Composition** — content_docs_memory_game_frontend_host_leaderboard_index_leaderboard_host_page, content_docs_memory_game_frontend_host_leaderboard_desktop_leaderboard_desktop_leaderboard, content_docs_memory_game_frontend_host_leaderboard_mobile_leaderboard_mobile_leaderboard, content_docs_memory_game_frontend_host_leaderboard_types_leaderboard_room, content_docs_memory_game_frontend_host_leaderboard_types_leaderboard_player [EXTRACTED 1.00]
- **Host Lobby Composition** — content_docs_memory_game_frontend_host_lobby_index_lobby_page, content_docs_memory_game_frontend_host_lobby_lobby_dialogs_lobby_dialogs, content_docs_memory_game_frontend_host_lobby_lobby_screens_lobby_screens, content_docs_memory_game_frontend_host_lobby_player_list_card_player_list_card, content_docs_memory_game_frontend_host_lobby_room_share_card_room_share_card [EXTRACTED 1.00]
- **Host Game State Flow** — content_docs_memory_game_frontend_host_lobby_index_countdown_start_flow, content_docs_memory_game_frontend_host_monitor_index_game_completion_flow, content_docs_memory_game_frontend_host_leaderboard_index_leaderboard_host_page [EXTRACTED 1.00]
- **Join Room Admission Flow** — content_docs_memory_game_frontend_join_room_code_joinroomredirectpage, content_docs_memory_game_frontend_join_index_joinpage, content_docs_memory_game_frontend_join_join_card_joincard, content_docs_memory_game_frontend_join_index_handlejoinroom, content_docs_memory_game_frontend_join_index_allowlist_access_control, content_docs_memory_game_frontend_join_access_denied_modal_accessdeniedmodal, content_docs_memory_game_frontend_join_index_automatic_room_join [EXTRACTED 1.00]
- **Quiz-Memory Alternation Flow** — content_docs_memory_game_frontend_player_countdown_index_countdownpage, content_docs_memory_game_frontend_player_quiz_index_quizpage, content_docs_memory_game_frontend_player_quiz_index_handleanswerselect, content_docs_memory_game_frontend_player_memory_challenge_index_memorychallengepage, content_docs_memory_game_frontend_player_memory_challenge_index_handlegameend, content_docs_memory_game_frontend_index_quiz_memory_flow [EXTRACTED 1.00]
- **Realtime Progress Coordination** — content_docs_memory_game_frontend_host_monitor_player_progress_grid_playerprogressgrid, content_docs_memory_game_frontend_player_quiz_quiz_broadcast_broadcastquizphase, content_docs_memory_game_frontend_player_quiz_index_quizpage, content_docs_memory_game_frontend_player_memory_challenge_index_handlegameend, content_docs_memory_game_frontend_index_realtime_room_state [INFERRED 0.95]
- **Responsive Question Text Layout Utilities** — content_docs_memory_game_frontend_player_quiz_quiz_utils_hasnewlinewithcontent, content_docs_memory_game_frontend_player_quiz_quiz_utils_getquestionalignment, content_docs_memory_game_frontend_player_quiz_quiz_utils_rendertextwithlinebreaks, content_docs_memory_game_frontend_player_quiz_quiz_utils_getquestionfontsize, content_docs_memory_game_frontend_player_quiz_quiz_utils_needscrollablecontainer, content_docs_memory_game_frontend_player_quiz_quiz_utils_getoptionfontsize, content_docs_memory_game_frontend_player_quiz_quiz_utils_responsive_question_text_layout [INFERRED 0.95]
- **Result State Screen Set** — content_docs_memory_game_frontend_player_result_result_screens_resulterrorscreen, content_docs_memory_game_frontend_player_result_result_screens_resultloadingscreen, content_docs_memory_game_frontend_player_result_result_screens_resultnotfoundscreen, content_docs_memory_game_frontend_player_result_result_screens_result_state_screens [EXTRACTED 1.00]
- **Waiting Room Game Start Flow** — content_docs_memory_game_frontend_player_waiting_index_waitingroompage, content_docs_memory_game_frontend_player_waiting_index_handlecountdowncomplete, content_docs_memory_game_frontend_player_waiting_index_handlefullscreentap, content_docs_memory_game_frontend_player_waiting_index_proceedtogame, content_docs_memory_game_frontend_player_waiting_game_starting_screen_gamestartingscreen, content_docs_memory_game_frontend_player_waiting_game_starting_screen_game_start_transition [EXTRACTED 1.00]
- **Quiz Selection Flow** — content_docs_memory_game_frontend_select_quiz_index_selectquizpage, content_docs_memory_game_frontend_select_quiz_select_quiz_content_selectquizcontent, content_docs_memory_game_frontend_select_quiz_quiz_filter_bar_quizfilterbar, content_docs_memory_game_frontend_select_quiz_quiz_card_quizcard, content_docs_memory_game_frontend_select_quiz_quiz_detail_dialog_quizdetaildialog, content_docs_memory_game_frontend_select_quiz_pagination_quizpagination, content_docs_memory_game_frontend_select_quiz_empty_state_emptystate [EXTRACTED 1.00]
- **Project Setup Pipeline** — content_docs_memory_game_setup_index_project_setup, content_docs_memory_game_setup_index_next_js_installation, content_docs_memory_game_setup_index_tailwind_styling, content_docs_memory_game_setup_index_supabase_environment, content_docs_memory_game_setup_index_folder_structure [EXTRACTED 1.00]
- **Supabase Game Data Layer** — content_docs_memory_game_setup_supabase_single_supabase_project, content_docs_memory_game_setup_supabase_game_database_schema, content_docs_memory_game_setup_supabase_sessions_table, content_docs_memory_game_setup_supabase_participants_table, content_docs_memory_game_setup_supabase_quizzes_table, content_docs_memory_game_setup_supabase_supabase_realtime, content_docs_memory_game_setup_supabase_open_rls_policies [EXTRACTED 1.00]
- **Sea Turtle Asset Composition** — public_memogame_sea_turtle_sea_turtle_memory_card_asset, public_memogame_sea_turtle_sea_turtle, public_memogame_sea_turtle_retro_pixel_art, public_memogame_sea_turtle_transparent_background [EXTRACTED 1.00]

## Communities (39 total, 13 thin omitted)

### Community 0 - "Auth and Project Setup"
Cohesion: 0.06
Nodes (53): Overview & Architecture, AuthCallback, Browser Supabase Client, CallbackContent, Google OAuth, Login & Authentication, LoginPage, loginWithGoogle (+45 more)

### Community 1 - "Results and Waiting Room"
Cohesion: 0.06
Nodes (51): readCurrentPlayer, saveQuizLastResult, FloatingActionButtons, Responsive Result Actions, Correct Answer Normalization, ResultPage, ResultPageContent, PlayerResultCard (+43 more)

### Community 2 - "Fumadocs Documentation Platform"
Cohesion: 0.09
Nodes (20): { GET }, Layout(), generateMetadata(), Page(), Layout(), generateStaticParams(), generateStaticParams(), getMDXComponents() (+12 more)

### Community 3 - "Player Gameplay and Room Joining"
Cohesion: 0.10
Nodes (33): MonitorHeader, MonitorLoadingScreen, PlayerProgressGrid, TimeWarning, Client Component Pattern, Frontend Architecture, Player Quiz Progress, Quiz-Memory Flow (+25 more)

### Community 4 - "Quiz Discovery Interface"
Cohesion: 0.09
Nodes (31): Categories, Category, getCategoryColor, getLanguageDisplayName, translateCategoryFn, EmptyState, EmptyStateProps, generatePageNumbers (+23 more)

### Community 5 - "Development Package Configuration"
Cohesion: 0.06
Nodes (30): devDependencies, postcss, tailwindcss, @tailwindcss/postcss, @types/mdx, @types/node, @types/react, @types/react-dom (+22 more)

### Community 6 - "TypeScript Configuration"
Cohesion: 0.07
Nodes (28): dom, dom.iterable, esnext, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts (+20 more)

### Community 7 - "Backend Database and Deployment"
Cohesion: 0.13
Nodes (23): Game Development Tutorial Lifecycle, Tutorial GameForSmart, Client-Side Supabase Game Logic, Countdown State Route Handler, Player Heartbeat Route Handler, Join Room Route Handler, Minimal Memory Game Backend, Player Liveness Detection (+15 more)

### Community 8 - "Memory Game Platform Architecture"
Cohesion: 0.10
Nodes (22): SettingsCard, SettingsCardProps, Time Limit Options, TimeLimitSelect, TimeLimitSelectProps, Client-Managed Quiz Fetching, SelectQuizPage, handleStartQuiz (+14 more)

### Community 9 - "Host Leaderboard and Results"
Cohesion: 0.15
Nodes (19): ChampionCard, DesktopLeaderboard, FloatingActionButtons, handleRestart, LeaderboardHostPage, Leaderboard Player Sorting, openStatistics, Leaderboard Host Access Verification (+11 more)

### Community 10 - "Runtime Dependencies"
Cohesion: 0.12
Nodes (17): cn, fumadocs-core, fumadocs-mdx, fumadocs-ui, lucide-react, next, dependencies, cn (+9 more)

### Community 11 - "Home and Host Lobby"
Cohesion: 0.17
Nodes (16): Cross-Page Game Notifications, HomePage, Pixel Visual Identity, Host Route Entry, Lobby Countdown Start Flow, Friend and Group Invitation Flow, Lobby Leave and Kick Flow, Lobby Host Authentication and Auto-Healing (+8 more)

### Community 12 - "Quiz Settings Flow"
Cohesion: 0.18
Nodes (14): Difficulty Mode Selection, GameModeButtons, fetchQuizData, getHostId, handleBackClick, handleSettingsComplete, pickDefaultQuestionCount, Quiz Data Fallback (+6 more)

### Community 13 - "Tailwind Pixel Styling"
Cohesion: 0.27
Nodes (10): i18n Locale Layer, CSS-First Tailwind v4, globals.css Entry Point, LPMQ Isep Misbah, OKLCH CSS Theme, Pixel Base Styles, Press Start 2P, Retro Font System (+2 more)

### Community 14 - "Responsive Question Text Layout"
Cohesion: 0.33
Nodes (7): getOptionFontSize, getQuestionAlignment, getQuestionFontSize, hasNewlineWithContent, needsScrollableContainer, renderTextWithLineBreaks, Responsive Question Text Layout

### Community 15 - "Whale Illustration Asset"
Cohesion: 0.29
Nodes (7): Cartoon Illustration Style, Marine Mammal, Memory Game Asset, Ocean Habitat, Transparent Background, Whale, Two Blue Cartoon Whales

### Community 17 - "Component Organization Policy"
Cohesion: 0.83
Nodes (4): Component Placement Policy, Functional Component Organization, Page-Local Components, Shared Component Library

### Community 18 - "Sitting Cat Illustration"
Cohesion: 0.50
Nodes (4): Curved Tail, Pointed Ears, Seated Pose, Sitting Cat

### Community 19 - "Jellyfish Line Art"
Cohesion: 0.50
Nodes (4): Animal Memory Game Asset, Jellyfish, Jellyfish Illustration, Pink-and-Black Line Art

### Community 20 - "Sea Turtle Pixel Art"
Cohesion: 0.50
Nodes (4): Retro Pixel-Art Style, Sea Turtle, Sea Turtle Memory-Card Asset, Transparent Background

### Community 22 - "Question Answer Shuffling"
Cohesion: 1.00
Nodes (3): Question and Answer Shuffling, shuffleArrayWithIndices, shuffleQuestionsWithSeed

### Community 24 - "Cow Pixel Art"
Cohesion: 0.67
Nodes (3): Cow, Cow Memory-Card Asset, Pixel-Art Style

### Community 25 - "Koala Memory Card"
Cohesion: 0.67
Nodes (3): Animal Memory Game Card, Koala, Koala Illustration

### Community 26 - "Penguin Mascot Asset"
Cohesion: 0.67
Nodes (3): Memo Game Mascot Asset, Penguin Character, Penguin Mascot

### Community 27 - "Fumadocs Content Source"
Cohesion: 1.00
Nodes (3): Content Source Adapter, fumadocs-gfstutorial, Fumadocs MDX

## Ambiguous Edges - Review These
- `Two-Project Supabase Setup` → `Single Supabase Project`  [AMBIGUOUS]
  content/docs/memory-game/setup/index.mdx · relation: conceptually_related_to

## Knowledge Gaps
- **159 isolated node(s):** `gameCards`, `flow`, `{ GET }`, `inter`, `MDXProvidedComponents` (+154 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **13 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Two-Project Supabase Setup` and `Single Supabase Project`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `SelectQuizContent` connect `Quiz Discovery Interface` to `Memory Game Platform Architecture`, `Auth and Project Setup`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **Why does `Memory Game Platform` connect `Memory Game Platform Architecture` to `Auth and Project Setup`, `Quiz Discovery Interface`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `SelectQuizContent` (e.g. with `Memory Game Platform` and `Custom Hooks`) actually correct?**
  _`SelectQuizContent` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `gameCards`, `flow`, `{ GET }` to the rest of the system?**
  _159 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Auth and Project Setup` be split into smaller, more focused modules?**
  _Cohesion score 0.0602322206095791 - nodes in this community are weakly interconnected._
- **Should `Results and Waiting Room` be split into smaller, more focused modules?**
  _Cohesion score 0.058823529411764705 - nodes in this community are weakly interconnected._