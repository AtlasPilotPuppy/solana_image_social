export interface Event {
  id: string;
  allDay: boolean;
  color?: string;
  description: string;
  end: number;
  start: number;
  title: string;
}

export type View = 'dayGridMonth' | 'timeGridWeek' | 'timeGridDay' | 'listWeek';
