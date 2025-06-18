<!-- <script>
	export let data;
	const events = data.events;
	const now = new Date();

	// Categorize events
	const upcomingEvents = events.filter((event) => new Date(event.event_start_datetime) > now);
	const ongoingEvents = events.filter(
		(event) =>
			new Date(event.event_start_datetime) <= now && new Date(event.event_end_datetime) >= now
	);
	const pastEvents = events.filter((event) => new Date(event.event_end_datetime) < now);
</script> -->

<script>
	const events = async () => {
		const response = fetch('');
	};
</script>

<div class="min-h-screen bg-gray-900 px-4 py-12 text-gray-100 sm:px-6 lg:px-8">
	<!-- Header -->
	<div class="mx-auto mb-12 max-w-7xl text-center">
		<h1
			class="mb-8 bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl"
		>
			Upcoming Events
		</h1>
		<p class="mx-auto mt-4 max-w-3xl text-lg text-gray-400">
			Discover and participate in our exciting events
		</p>
	</div>

	<!-- Ongoing Events -->
	{#if ongoingEvents.length > 0}
		<section class="mx-auto mb-16 max-w-7xl">
			<div class="mb-8 flex items-center justify-between">
				<h2 class="flex items-center text-2xl font-bold">
					<span class="mr-3 inline-block h-3 w-3 animate-pulse rounded-full bg-orange-500"></span>
					Ongoing Events
				</h2>
			</div>

			<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{#each ongoingEvents as event}
					<div
						class="transform overflow-hidden rounded-xl bg-gray-800 shadow-lg transition transition-shadow hover:-translate-y-1 hover:shadow-xl"
					>
						<div class="relative h-48">
							<img
								src={event.poster_image}
								alt={event.event_name}
								class="h-full w-full object-cover"
								on:error={(e) => (e.target.src = '/default-event-dark.jpg')}
							/>
							<div
								class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
							></div>
							<div
								class="absolute left-0 top-0 rounded-br-lg bg-orange-500 px-3 py-1 text-xs font-bold text-white"
							>
								LIVE
							</div>
						</div>
						<div class="p-6">
							<h3 class="mb-2 text-xl font-bold text-white">{event.event_name}</h3>
							<p class="mb-4 line-clamp-2 text-sm text-gray-400">{event.event_description}</p>

							<div class="mb-4 flex items-center text-sm text-gray-500">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="mr-1 h-4 w-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
								{event.venue.split(',')[0]}
							</div>

							<div class="flex justify-between text-sm">
								<div class="flex items-center text-amber-400">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="mr-1 h-4 w-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
										/>
									</svg>
									Ends {new Date(event.event_end_datetime).toLocaleDateString('en-IN')}
								</div>
								<a
									href={`/Events/${event.event_id}`}
									class="font-medium text-orange-400 hover:text-orange-300"
								>
									View Details →
								</a>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</section>
	{/if}

	<!-- Upcoming Events -->
	{#if upcomingEvents.length > 0}
		<section class="mx-auto mb-16 max-w-7xl">
			<div class="mb-8 flex items-center justify-between">
				<h2 class="text-2xl font-bold">Upcoming Events</h2>
			</div>

			<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{#each upcomingEvents as event}
					<div
						class="transform overflow-hidden rounded-xl bg-gray-800 shadow-lg transition transition-shadow hover:-translate-y-1 hover:shadow-xl"
					>
						<div class="relative h-48">
							<img
								src={event.poster_image}
								alt={event.event_name}
								class="h-full w-full object-cover"
								on:error={(e) => (e.target.src = '/default-event-dark.jpg')}
							/>
							<div
								class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
							></div>
						</div>
						<div class="p-6">
							<h3 class="mb-2 text-xl font-bold text-white">{event.event_name}</h3>
							<p class="mb-4 line-clamp-2 text-sm text-gray-400">{event.event_description}</p>

							<div class="mb-4 flex items-center text-sm text-gray-500">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="mr-1 h-4 w-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
								{event.venue.split(',')[0]}
							</div>

							<div class="flex justify-between text-sm">
								<div class="flex items-center text-blue-400">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="mr-1 h-4 w-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
										/>
									</svg>
									Starts {new Date(event.event_start_datetime).toLocaleDateString('en-IN')}
								</div>
								<a
									href={`/Events/${event.event_id}`}
									class="font-medium text-orange-400 hover:text-orange-300"
								>
									View Details →
								</a>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</section>
	{/if}

	<!-- Past Events -->
	{#if pastEvents.length > 0}
		<section class="mx-auto max-w-7xl">
			<div class="mb-8 flex items-center justify-between">
				<h2 class="text-2xl font-bold">Past Events</h2>
			</div>

			<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{#each pastEvents as event}
					<div
						class="transform overflow-hidden rounded-xl bg-gray-800 opacity-80 shadow-lg transition transition-shadow hover:-translate-y-1 hover:opacity-100 hover:shadow-xl"
					>
						<div class="relative h-48">
							<img
								src={event.poster_image}
								alt={event.event_name}
								class="h-full w-full object-cover grayscale transition-all hover:grayscale-0"
								on:error={(e) => (e.target.src = '/default-event-dark.jpg')}
							/>
							<div
								class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
							></div>
							<div
								class="absolute left-0 top-0 rounded-br-lg bg-gray-600 px-3 py-1 text-xs font-bold text-white"
							>
								ENDED
							</div>
						</div>
						<div class="p-6">
							<h3 class="mb-2 text-xl font-bold text-white">{event.event_name}</h3>
							<p class="mb-4 line-clamp-2 text-sm text-gray-400">{event.event_description}</p>

							<div class="mb-4 flex items-center text-sm text-gray-500">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="mr-1 h-4 w-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
								{event.venue.split(',')[0]}
							</div>

							<div class="flex justify-between text-sm">
								<div class="flex items-center text-gray-400">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="mr-1 h-4 w-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
										/>
									</svg>
									Ended {new Date(event.event_end_datetime).toLocaleDateString('en-IN')}
								</div>
								<a
									href={`/Events/${event.event_id}`}
									class="font-medium text-orange-400 hover:text-orange-300"
								>
									View Details →
								</a>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</section>
	{/if}
</div>
