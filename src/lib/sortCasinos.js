/**
 * Standard casino sort: revenueTier ASC, then priorityScore DESC, then rating DESC.
 * Tier 1 casinos always appear first regardless of other scores.
 */
export default function sortCasinos(casinoArray) {
  return [...casinoArray].sort((a, b) => {
    // Revenue tier ascending (1 before 2 before 3)
    const tierDiff = (a.revenueTier || 3) - (b.revenueTier || 3);
    if (tierDiff !== 0) return tierDiff;

    // Priority score descending
    const priorityDiff = b.priorityScore - a.priorityScore;
    if (priorityDiff !== 0) return priorityDiff;

    // Rating descending
    return b.rating - a.rating;
  });
}
