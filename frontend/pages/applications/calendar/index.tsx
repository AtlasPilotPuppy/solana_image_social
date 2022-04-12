import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';

import { Authenticated } from 'src/components/Authenticated';
import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';

import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageHeader from 'src/content/Applications/Calendar/PageHeader';
import Footer from 'src/components/Footer';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';

import {
  Grid,
  Drawer,
  Box,
  Card,
  Divider,
  useMediaQuery,
  styled,
  useTheme
} from '@mui/material';

import type { View } from 'src/models/calendar';
import { useDispatch, useSelector } from 'src/store';
import { getEvents, updateEvent } from 'src/slices/calendar';

import Actions from 'src/content/Applications/Calendar/Actions';
import EventDrawer from 'src/content/Applications/Calendar/EventDrawer';

const FullCalendarWrapper = styled(Box)(
  ({ theme }) => `
    padding: ${theme.spacing(3)};

    & .fc-license-message {
      display: none;
    }
    .fc {

      .fc-col-header-cell {
        padding: ${theme.spacing(1)};
        background: ${theme.colors.alpha.black[5]};
      }

      .fc-scrollgrid {
        border: 2px solid ${theme.colors.alpha.black[10]};
        border-right-width: 1px;
        border-bottom-width: 1px;
      }

      .fc-cell-shaded,
      .fc-list-day-cushion {
        background: ${theme.colors.alpha.black[5]};
      }

      .fc-list-event-graphic {
        padding-right: ${theme.spacing(1)};
      }

      .fc-theme-standard td, .fc-theme-standard th,
      .fc-col-header-cell {
        border: 1px solid ${theme.colors.alpha.black[10]};
      }

      .fc-event {
        padding: ${theme.spacing(0.1)} ${theme.spacing(0.3)};
      }

      .fc-list-day-side-text {
        font-weight: normal;
        color: ${theme.colors.alpha.black[70]};
      }

      .fc-list-event:hover td,
      td.fc-daygrid-day.fc-day-today {
        background-color: ${theme.colors.primary.lighter};
      }

      td.fc-daygrid-day:hover,
      .fc-highlight {
        background: ${theme.colors.alpha.black[10]};
      }

      .fc-daygrid-dot-event:hover, 
      .fc-daygrid-dot-event.fc-event-mirror {
        background: ${theme.colors.primary.lighter};
      }

      .fc-daygrid-day-number {
        padding: ${theme.spacing(1)};
        font-weight: bold;
      }

      .fc-list-sticky .fc-list-day > * {
        background: ${theme.colors.alpha.black[5]} !important;
      }

      .fc-cell-shaded, 
      .fc-list-day-cushion {
        background: ${theme.colors.alpha.black[10]} !important;
        color: ${theme.colors.alpha.black[70]} !important;
      }

      &.fc-theme-standard td, 
      &.fc-theme-standard th,
      &.fc-theme-standard .fc-list {
        border-color: ${theme.colors.alpha.black[30]};
      }
    }
`
);

function ApplicationsCalendar() {
  const theme = useTheme();

  const calendarRef = useRef<FullCalendar | null>(null);
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  const dispatch = useDispatch();
  const { events } = useSelector((state) => state.calendar);
  const [date, setDate] = useState<Date>(new Date());
  const [view, setView] = useState<View>(mobile ? 'listWeek' : 'dayGridMonth');

  const [drawer, setDrawer] = useState<any>({
    isDrawerOpen: false,
    eId: undefined,
    range: undefined
  });

  const eventChosen =
    drawer.eId && events.find((event) => event.id === drawer.eId);

  const handleDateToday = (): void => {
    const calItem = calendarRef.current;

    if (calItem) {
      const calendar = calItem.getApi();

      calendar.today();
      setDate(calendar.getDate());
    }
  };

  const changeView = (changedView: View): void => {
    const calItem = calendarRef.current;

    if (calItem) {
      const calendar = calItem.getApi();

      calendar.changeView(changedView);
      setView(changedView);
    }
  };

  const handleDatePrev = (): void => {
    const calItem = calendarRef.current;

    if (calItem) {
      const calendar = calItem.getApi();

      calendar.prev();
      setDate(calendar.getDate());
    }
  };

  const handleDateNext = (): void => {
    const calItem = calendarRef.current;

    if (calItem) {
      const calendar = calItem.getApi();

      calendar.next();
      setDate(calendar.getDate());
    }
  };

  const handleAddClick = (): void => {
    setDrawer({
      isDrawerOpen: true
    });
  };

  const handleRangeSelect = (arg: any): void => {
    const calItem = calendarRef.current;

    if (calItem) {
      const calendar = calItem.getApi();

      calendar.unselect();
    }

    setDrawer({
      isDrawerOpen: true,
      range: {
        start: arg.start.getTime(),
        end: arg.end.getTime()
      }
    });
  };

  const handleEventSelect = (arg: any): void => {
    setDrawer({
      isDrawerOpen: true,
      eId: arg.event.id
    });
  };

  const handleEventResize = async ({ event }: any): Promise<void> => {
    try {
      await dispatch(
        updateEvent(event.id, {
          allDay: event.allDay,
          start: event.start.getTime(),
          end: event.end.getTime()
        })
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleEventDrop = async ({ event }: any): Promise<void> => {
    try {
      dispatch(
        updateEvent(event.id, {
          allDay: event.allDay,
          start: event.start.getTime(),
          end: event.end.getTime()
        })
      );
    } catch (err) {
      console.error(err);
    }
  };

  const closeDrawer = (): void => {
    setDrawer({
      isDrawerOpen: false
    });
  };

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  useEffect(() => {
    const calItem = calendarRef.current;

    if (calItem) {
      const calendar = calItem.getApi();
      const changedView = mobile ? 'listWeek' : 'dayGridMonth';

      calendar.changeView(changedView);
      setView(changedView);
    }
  }, [mobile]);

  return (
    <>
      <Head>
        <title>Calendar - Applications</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader handleCreateEvent={handleAddClick} />
      </PageTitleWrapper>
      <Grid
        sx={{
          px: 4
        }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={4}
      >
        <Grid item xs={12}>
          <Card>
            <Box p={3}>
              <Actions
                date={date}
                onNext={handleDateNext}
                onPrevious={handleDatePrev}
                onToday={handleDateToday}
                changeView={changeView}
                view={view}
              />
            </Box>
            <Divider />
            <FullCalendarWrapper>
              <FullCalendar
                allDayMaintainDuration
                initialDate={date}
                initialView={view}
                droppable
                editable
                eventDisplay="block"
                eventClick={handleEventSelect}
                eventDrop={handleEventDrop}
                dayMaxEventRows={4}
                eventResizableFromStart
                eventResize={handleEventResize}
                events={events}
                headerToolbar={false}
                height={660}
                ref={calendarRef}
                rerenderDelay={10}
                select={handleRangeSelect}
                selectable
                weekends
                plugins={[
                  dayGridPlugin,
                  timeGridPlugin,
                  interactionPlugin,
                  listPlugin
                ]}
              />
            </FullCalendarWrapper>
          </Card>
        </Grid>
      </Grid>
      <Footer />
      <Drawer
        variant="temporary"
        anchor={theme.direction === 'rtl' ? 'left' : 'right'}
        onClose={closeDrawer}
        open={drawer.isDrawerOpen}
        elevation={9}
      >
        {drawer.isDrawerOpen && (
          <EventDrawer
            event={eventChosen}
            onAddComplete={closeDrawer}
            onCancel={closeDrawer}
            onDeleteComplete={closeDrawer}
            onEditComplete={closeDrawer}
            range={drawer.range}
          />
        )}
      </Drawer>
    </>
  );
}

ApplicationsCalendar.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export default ApplicationsCalendar;
