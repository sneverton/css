import { computed } from "vue";
import { Breakpoints } from "@/enums/Breakpoints";
import type { Props } from "types";
import type { OmitProperties, PickKeys } from "ts-essentials";
import { typeOf, type TypeOf } from "@/utils/typeOf";

type OmitBreakpoints<T> = Omit<T, `${string}${Breakpoints}`>;

type ParserCallback<V = any> = (v: V) => string;

type Parser<V = any> = Partial<{
  [T in PickKeys<TypeOf, V>]: ParserCallback<TypeOf[T]>;
}>;

type Parsers<PP> = {
  [P in keyof OmitBreakpoints<PP>]: Parser<Exclude<PP[P], undefined>>;
};

function useParseProps<PP extends Props>(
  props: PP,
  parsers: Parsers<OmitProperties<PP, string | undefined>>
) {
  const parsedProps = computed(() => {
    const r: Props = { ...props };

    const sufixs = ["", ...Object.values(Breakpoints)];

    Object.entries<Parser>(parsers).forEach(([prop, parser]) =>
      sufixs.forEach((s) => {
        const fullName = `${prop}${s}`;

        if (r[fullName] !== undefined) {
          const type = typeOf(r[fullName]);
          const parserCallback = parser[type] as ParserCallback;

          r[fullName] = parserCallback?.(r[fullName]) ?? r[fullName];
        }
      })
    );

    return r as Record<string, string | undefined>;
  });

  return { parsedProps };
}

export { useParseProps };
