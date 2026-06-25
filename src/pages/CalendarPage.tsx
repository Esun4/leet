import { useState, useEffect } from 'react';
import { getProblems } from '../lib/problems';
import type { Problem } from '../types/index';
import CalendarGrid from '../components/CalendarGrid';

export default function CalendarPage() {
    const [problems, setProblems] = useState<Problem[]>([]);

    useEffect(() => {
        async function fetchProblems() {
            const data = await getProblems();
            setProblems(data ?? [])
        }
        fetchProblems();
    }, [])

    const problemsByDate = problems.reduce((acc, problem) => {
    if (!acc[problem.next_review]) {
        acc[problem.next_review] = [];
    }
    acc[problem.next_review].push(problem);
    return acc;
    }, {} as Record<string, Problem[]>);

    return <CalendarGrid problemsByDate={problemsByDate} />;
}
