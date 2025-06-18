<script>
	export let data;
	const events = data.events;

	import { page } from '$app/stores';
	const { eventId } = $page.params;
	const event = events.find((e) => e.event_id === eventId);

	if (!event) throw error(404, 'Event not found');
</script>

<section class="min-h-screen bg-gray-900 text-gray-100">
	<div class="container mx-auto max-w-7xl px-6 py-12 lg:px-8">
		<!-- Header with back button -->
		<div class="mb-8 flex flex-col items-center">
			<a
				href="/"
				class="mb-4 flex items-center self-start text-orange-400 transition-colors hover:text-orange-300"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="mr-1"
				>
					<line x1="19" y1="12" x2="5" y2="12"></line>
					<polyline points="12 19 5 12 12 5"></polyline>
				</svg>
				Back to Events
			</a>
			<h1
				class="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl"
			>
				{event.event_name}
			</h1>
		</div>

		<!-- Mobile Image -->
		<div class="mb-8 overflow-hidden rounded-xl shadow-2xl lg:hidden">
			<img
				src={event.poster_image}
				alt={event.event_name}
				class="h-80 w-full object-cover"
				on:error={(e) => (e.target.src = '/default-event-dark.jpg')}
			/>
		</div>

		<!-- Main Content Grid -->
		<div class="grid gap-12 lg:grid-cols-2 lg:items-start">
			<!-- Desktop Image (left column) -->
			<div class="hidden overflow-hidden rounded-xl shadow-2xl lg:block">
				<img
					src={event.poster_image}
					alt={event.event_name}
					class="h-full min-h-[500px] w-full object-cover"
					on:error={(e) => (e.target.src = '/default-event-dark.jpg')}
				/>
			</div>

			<!-- Right Column (Description + Details) -->
			<div class="space-y-8">
				<!-- Event Description -->
				<div class="rounded-xl border border-gray-700 bg-gray-800/50 p-6 backdrop-blur-sm">
					<h2 class="mb-3 flex items-center text-xl font-semibold text-orange-400">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="mr-2"
						>
							<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
							<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
						</svg>
						About This Event
					</h2>
					<div class="prose prose-invert max-w-none text-gray-300">
						<p class="text-lg leading-relaxed">{event.event_description}</p>
						{#if event.venue}
							<p class="mt-4 flex items-center text-amber-100">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="mr-2"
								>
									<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
									<circle cx="12" cy="10" r="3"></circle>
								</svg>
								<span class="font-medium">Location:</span>
								{event.venue}
							</p>
						{/if}
					</div>
				</div>

				<!-- Event Details Card -->
				<div class="rounded-xl border border-gray-700 bg-gray-800/50 p-6 backdrop-blur-sm">
					<h2 class="mb-4 text-xl font-semibold text-orange-400">Event Details</h2>

					<!-- Timeline -->
					<div class="mb-6 flex items-start">
						<div class="flex-shrink-0 rounded-lg bg-orange-400/10 p-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="text-orange-400"
							>
								<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
								<line x1="16" y1="2" x2="16" y2="6"></line>
								<line x1="8" y1="2" x2="8" y2="6"></line>
								<line x1="3" y1="10" x2="21" y2="10"></line>
							</svg>
						</div>
						<div class="ml-4">
							<h3 class="text-lg font-medium text-gray-100">Timeline</h3>
							<div class="mt-2 space-y-1 text-gray-300">
								<p class="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="mr-2 text-amber-400"
									>
										<circle cx="12" cy="12" r="10"></circle>
										<polyline points="12 6 12 12 16 14"></polyline>
									</svg>
									<span class="font-medium">Starts:</span>
									{new Date(event.event_start_datetime).toLocaleString('en-IN')}
								</p>
								<p class="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="mr-2 text-amber-400"
									>
										<circle cx="12" cy="12" r="10"></circle>
										<polyline points="12 6 12 12 16 14"></polyline>
									</svg>
									<span class="font-medium">Ends:</span>
									{new Date(event.event_end_datetime).toLocaleString('en-IN')}
								</p>
							</div>
						</div>
					</div>

					<!-- Leaderboard -->
					{#if event.leaderboard?.length > 0}
						<div class="mb-6 flex items-start">
							<div class="flex-shrink-0 rounded-lg bg-purple-400/10 p-3">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="text-purple-400"
								>
									<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
									<path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
									<path d="M4 22h16"></path>
									<path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
									<path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
									<path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
								</svg>
							</div>
							<div class="ml-4">
								<h3 class="text-lg font-medium text-gray-100">Leaderboard</h3>
								<div class="mt-2">
									<ol
										class="list-inside list-decimal space-y-2 text-gray-300 marker:text-orange-400"
									>
										{#each event.leaderboard as team}
											<li class="pl-2">
												<span class="font-medium text-amber-200">{team.team_name}</span>
												<span class="ml-2 text-purple-300">{team.points} points</span>
											</li>
										{/each}
									</ol>
								</div>
							</div>
						</div>
					{/if}

					<!-- Action Buttons -->
					<div class="mt-8 flex flex-col gap-4 sm:flex-row">
						<a
							href={event.feedback_form}
							target="_blank"
							rel="noopener"
							class="flex flex-1 items-center justify-center rounded-lg bg-orange-500 px-6 py-3 font-medium text-white transition-colors hover:bg-orange-600"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="mr-2"
							>
								<path d="M21.5 12a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"></path>
								<path d="M12 16v-4"></path>
								<path d="M12 8h.01"></path>
							</svg>
							Submit Feedback
						</a>

						<button
							class="flex flex-1 items-center justify-center rounded-lg border border-orange-500 bg-transparent px-6 py-3 font-medium text-orange-500 transition-colors hover:bg-orange-500/10"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="mr-2"
							>
								<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
								<polyline points="16 6 12 2 8 6"></polyline>
								<line x1="12" y1="2" x2="12" y2="15"></line>
							</svg>
							Download Resources
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
